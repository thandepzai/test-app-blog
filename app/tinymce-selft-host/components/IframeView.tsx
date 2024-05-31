import React, { useRef, useEffect } from 'react';

interface IframeProps {
  htmlContent: string;
}

const Iframe: React.FC<IframeProps> = ({ htmlContent }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const resizeIframe = () => {
      if (iframe && iframe.contentWindow) {
        const iframeDocument = iframe.contentWindow.document;
        const body = iframeDocument.body;
        const html = iframeDocument.documentElement;

        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        iframe.style.height = height + 'px';
      }
    };

    const handleLoad = () => {
      resizeIframe();

      if (iframe && iframe.contentWindow) {
        const observer = new MutationObserver(resizeIframe);
        observer.observe(iframe.contentWindow.document.body, {
          childList: true,
          subtree: true,
          attributes: true,
        });

        return () => observer.disconnect();
      }
    };

    if (iframe) {
      iframe.addEventListener('load', handleLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
      }
    };
  }, [htmlContent]);

  return (
    <iframe
      ref={iframeRef}
      className="w-full h-auto"
      srcDoc={htmlContent}
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"

    />
  );
};

export default Iframe;
