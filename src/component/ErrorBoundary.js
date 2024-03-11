import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // Fallback UI when an error occurs
        return <div>Something went wrong. Please try again later.</div>;
      }
  
      return this.props.children; 
    }
  }
  