"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: any) {
    console.error(
      "Component Rendering Error:",
      error
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-xl border border-red-500 bg-red-50 p-6">
          
          <h2 className="text-xl font-bold text-red-600">
            Component Crashed
          </h2>

          <p className="mt-2 text-sm text-red-500">
            This component failed to render safely.
          </p>

        </div>
      );
    }

    return this.props.children;
  }
}