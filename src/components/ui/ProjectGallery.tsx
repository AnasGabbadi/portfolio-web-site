'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Fade, IconButton, Modal, Stack, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

type ProjectGalleryProps = {
  images: string[];
  projectTitle: string;
  previousLabel: string;
  nextLabel: string;
  imageLabel: string;
  zoomHint: string;
  closeLabel: string;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

const ProjectGallery = ({
  images,
  projectTitle,
  previousLabel,
  nextLabel,
  imageLabel,
  zoomHint,
  closeLabel,
}: ProjectGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });
  const zoomAreaRef = useRef<HTMLDivElement | null>(null);

  const hasMultipleImages = images.length > 1;

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
    resetZoom();
  }, [images.length, resetZoom]);

  const goToNext = useCallback(() => {
    setActiveImage((current) => (current + 1) % images.length);
    resetZoom();
  }, [images.length, resetZoom]);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    resetZoom();
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    resetZoom();
  }, [resetZoom]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft' && hasMultipleImages) goToPrevious();
      if (event.key === 'ArrowRight' && hasMultipleImages) goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, hasMultipleImages, goToPrevious, goToNext, closeLightbox]);

  const handleWheelZoom = useCallback((event: WheelEvent) => {
    event.preventDefault();
    setZoom((current) => {
      const next = current - event.deltaY * 0.0015;
      const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
      if (clamped === MIN_ZOOM) setPan({ x: 0, y: 0 });
      return clamped;
    });
  }, []);

  // Modal portals its content one render-tick after mount, so a plain
  // useEffect on zoomAreaRef.current can fire before the node exists.
  // A callback ref is invoked exactly when React attaches/detaches the node.
  const setZoomAreaRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (zoomAreaRef.current) {
        zoomAreaRef.current.removeEventListener('wheel', handleWheelZoom);
      }
      zoomAreaRef.current = node;
      if (node) {
        node.addEventListener('wheel', handleWheelZoom, { passive: false });
      }
    },
    [handleWheelZoom],
  );

  if (!images.length) {
    return null;
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= MIN_ZOOM) return;
    setIsDragging(true);
    dragStart.current = { x: event.clientX, y: event.clientY };
    panStart.current = pan;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = event.clientX - dragStart.current.x;
    const dy = event.clientY - dragStart.current.y;
    setPan({ x: panStart.current.x + dx, y: panStart.current.y + dy });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    setZoom((current) => (current > MIN_ZOOM ? MIN_ZOOM : 2));
    setPan({ x: 0, y: 0 });
  };

  return (
    <Box>
      <Box
        onClick={() => openLightbox(activeImage)}
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          maxHeight: { xs: 420, md: 640 },
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          cursor: 'zoom-in',
          '&:hover .gallery-zoom-affordance': { opacity: 1 },
        }}
      >
        {images.map((image, index) => (
          <Fade key={image + index} in={index === activeImage} timeout={350} unmountOnExit>
            <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}>
              {brokenImages.has(image) ? (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'grey.100',
                  }}
                >
                  <i className="fas fa-image" style={{ fontSize: '3rem', color: '#9CA3AF' }} />
                </Box>
              ) : (
                <Image
                  src={image}
                  alt={`${projectTitle} – ${imageLabel} ${index + 1}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: 'contain' }}
                  priority={index === 0}
                  onError={() => setBrokenImages((current) => new Set(current).add(image))}
                />
              )}
            </Box>
          </Fade>
        ))}

        <Box
          className="gallery-zoom-affordance"
          sx={{
            position: 'absolute',
            zIndex: 2,
            right: 12,
            bottom: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            px: 1.25,
            py: 0.5,
            borderRadius: 5,
            bgcolor: 'rgba(15, 23, 42, 0.65)',
            color: 'common.white',
            opacity: { xs: 1, md: 0 },
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
          }}
        >
          <ZoomInIcon sx={{ fontSize: 16 }} />
          <Typography variant="caption" fontWeight={600}>
            {imageLabel}
          </Typography>
        </Box>

        {hasMultipleImages && (
          <>
            <IconButton
              aria-label={previousLabel}
              onClick={(event) => {
                event.stopPropagation();
                goToPrevious();
              }}
              sx={{
                position: 'absolute',
                zIndex: 2,
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'background.paper',
                boxShadow: 2,
                '&:hover': { bgcolor: 'background.paper', color: 'primary.main' },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              aria-label={nextLabel}
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
              sx={{
                position: 'absolute',
                zIndex: 2,
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'background.paper',
                boxShadow: 2,
                '&:hover': { bgcolor: 'background.paper', color: 'primary.main' },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </Box>

      {hasMultipleImages && (
        <>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1.5 }}>
            {activeImage + 1} / {images.length}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1.5, overflowX: 'auto', pb: 0.5 }}>
            {images.map((image, index) => (
              <Box
                key={image + index}
                component="button"
                type="button"
                onClick={() => {
                  setActiveImage(index);
                  resetZoom();
                }}
                aria-label={`${imageLabel} ${index + 1}`}
                sx={{
                  position: 'relative',
                  flex: '0 0 72px',
                  height: 54,
                  borderRadius: 1,
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor: activeImage === index ? 'primary.main' : 'transparent',
                  bgcolor: 'grey.100',
                  cursor: 'pointer',
                  p: 0,
                  opacity: activeImage === index ? 1 : 0.7,
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  '&:hover': { opacity: 1, transform: 'translateY(-2px)' },
                }}
              >
                <Image src={image} alt="" fill sizes="72px" style={{ objectFit: 'cover' }} />
              </Box>
            ))}
          </Stack>
        </>
      )}

      <Modal
        open={lightboxOpen}
        onClose={closeLightbox}
        closeAfterTransition
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        slotProps={{
          backdrop: { sx: { bgcolor: 'rgba(8, 12, 20, 0.92)' } },
        }}
      >
        <Fade in={lightboxOpen}>
          <Box
            sx={{
              position: 'relative',
              width: '100vw',
              height: '100dvh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
            }}
          >
            <IconButton
              aria-label={closeLabel}
              onClick={closeLightbox}
              sx={{
                position: 'absolute',
                top: { xs: 12, md: 24 },
                right: { xs: 12, md: 24 },
                zIndex: 3,
                bgcolor: 'rgba(255,255,255,0.1)',
                color: 'common.white',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
              }}
            >
              <CloseIcon />
            </IconButton>

            {hasMultipleImages && (
              <>
                <IconButton
                  aria-label={previousLabel}
                  onClick={goToPrevious}
                  sx={{
                    position: 'absolute',
                    zIndex: 3,
                    left: { xs: 8, md: 24 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: 'common.white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  <ChevronLeftIcon fontSize="large" />
                </IconButton>
                <IconButton
                  aria-label={nextLabel}
                  onClick={goToNext}
                  sx={{
                    position: 'absolute',
                    zIndex: 3,
                    right: { xs: 8, md: 24 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: 'common.white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  <ChevronRightIcon fontSize="large" />
                </IconButton>
              </>
            )}

            <Box
              ref={setZoomAreaRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onDoubleClick={handleDoubleClick}
              sx={{
                position: 'relative',
                width: { xs: '92vw', md: '80vw' },
                height: { xs: '68vh', md: '78vh' },
                overflow: 'hidden',
                touchAction: 'none',
                cursor: zoom > MIN_ZOOM ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                  transformOrigin: 'center center',
                }}
              >
                <Image
                  src={images[activeImage]}
                  alt={`${projectTitle} – ${imageLabel} ${activeImage + 1}`}
                  fill
                  sizes="90vw"
                  style={{ objectFit: 'contain' }}
                  draggable={false}
                  priority
                />
              </Box>
            </Box>

            <Stack alignItems="center" spacing={0.5} sx={{ mt: 2, color: 'common.white' }}>
              {hasMultipleImages && (
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  {activeImage + 1} / {images.length}
                </Typography>
              )}
              <Typography variant="caption" sx={{ opacity: 0.6 }}>
                {zoomHint}
              </Typography>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ProjectGallery;
