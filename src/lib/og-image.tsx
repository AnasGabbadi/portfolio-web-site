import { ImageResponse } from 'next/og';

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function renderOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0F2854 0%, #1C4D8D 55%, #4988C4 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            border: '3px solid rgba(255,255,255,0.35)',
            color: '#ffffff',
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 36,
          }}
        >
          AG
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 66,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: -1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            fontWeight: 500,
            color: '#BDE8F5',
            marginTop: 20,
            maxWidth: 900,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: 'rgba(255,255,255,0.75)',
            marginTop: 56,
          }}
        >
          gabbadianas.dev
        </div>
      </div>
    ),
    OG_IMAGE_SIZE
  );
}
