import React from 'react';
import { FadeIn, FadeUp } from '../Animations';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withAnimation(Component, type) {
  function ComponentWithAnimationHandling(props) {
    if (type === 'fade-in') {
      return (
        <FadeIn>
          <Component { ...props } />
        </FadeIn>
      );
    }

    if (type === 'fade-up') {
      return (
        <FadeUp>
          <Component { ...props } />
        </FadeUp>
      );
    }

    return <Component { ...props } />;
  }

  ComponentWithAnimationHandling
    .displayName = `WithAnimationHandling${getDisplayName(Component)}`;

  return ComponentWithAnimationHandling;
}

export { withAnimation };
