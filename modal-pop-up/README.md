# Accessibility-First Vanilla JavaScript Modal

A framework-free modal. Designed to be reusable, accessible, and extensible without adding unnecessary DOM complexity or dependencies.

Demo: https://htmlpreview.github.io/?https://github.com/briansenf/javascript/blob/main/modal-pop-up/main.html

---

## Core Architecture

**Single reusable modal instance**  
A single dialog container is dynamically populated rather than creating a modal per trigger. This keeps the DOM lean, reduces duplicated logic, and simplifies maintenance.

**Template-driven content injection**  
Uses native `<template>` elements to store structured modal content safely and semantically without rendering it in the active DOM.

**Attribute-driven configuration**  
Modal titles and content sources are defined via `data-*` attributes on trigger buttons, keeping behavior decoupled from structure.

---

## Accessibility Features

Built following modern ARIA dialog best practices:

- Proper dialog semantics using `role="dialog"` and `aria-modal="true"`
- Dynamic title updates via `aria-labelledby`
- Focus is trapped within the modal while open
- Focus returns to the previously focused element on close
- Fully keyboard accessible (Tab navigation + Escape to close)
- Honors `prefers-reduced-motion` for motion-sensitive users

---

## User Experience Details

- Clicking the backdrop closes the modal
- Dedicated close button inside the dialog
- Escape key support
- Background scroll locking while open
- Inner clicks do not accidentally close the modal
- Responsive, mobile-first layout

---

## Extensibility

This pattern is designed to scale and can support:

- Multiple modal triggers on a page
- Forms and interactive content within modals
- Framework-rendered components (React, etc.)
- Future expansion to stacked or promise-based modal flows

---

## Why Build This Without a Library?

This implementation demonstrates understanding of:

- Focus management and keyboard interaction patterns
- ARIA dialog accessibility requirements
- Event lifecycle management
- State-driven UI behavior using native JavaScript

---

## Feature Summary

- Single reusable modal
- Template-based dynamic content
- Focus trap + focus return
- Keyboard support
- Backdrop click to dismiss
- Scroll locking
- Motion accessibility support
- Responsive design
- Framework-agnostic
