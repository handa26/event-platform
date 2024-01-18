# Evently <img src="https://img.shields.io/badge/Build%20with-NextJS-61dbfb?style=popout&logo=nextdotjs">

## Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation-for-development)
- [Tech Stack](#tech-stack)
- [Screenshoots](#screenshoots)
- [Tweeter](#tweeter)

## Description

Evently, drawing inspiration from Eventbrite, stands as an event management and ticketing website. It's a full-stack platform utilizing the MERN stack with Next.js as the React framework, offering seamless payment processing through Stripe. Users have the ability to create and manage their events, as well as purchase tickets for events created by any user.

## Features

### User Onboarding

Using Clerk as authentication & user management, it'll ensures a smooth onboarding experience. Users can set their profile image, name, username, and add a bio to personalize their profiles.

### Events Management

Users have the ability to create events, events management, delete/update events, and also tracking users order.

### Purchase tickets

Buying an event ticket couldn't be easier with Stripe.

### Search & filter

Users have the ability to search for events or filter them by category. In terms of event management, users can navigate through an order list.

## Installation for Development

Use the package manager [npm](https://www.npmjs.com/get-npm) to install all required dependecies.
```bash
npm install
```
and then:
```bash
npm run dev
```

## Tech Stack

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://nextjs.org/)
- UI Library: [shadcn/ui](https://ui.shadcn.com/) (for form templates)
- Authentication: [Clerk](https://clerk.com/)
- Payment: [Stripe](https://dashboard.stripe.com/)
- Upload images: [uploadthing](https://uploadthing.com/)
- Server: Node.js/Express.js
- Database: MongoDB with Mongoose

## Screenshoots

<div align="center">
    <img width="100%" src="./public/assets/evently-homepage.png">
    <img width="100%" src="./public/assets/evently-event-detail.png">
    <img width="100%" src="./public/assets/evently-profile.png">
    <img width="100%" src="./public/assets/evently-create.png">
    <img width="100%" src="./public/assets/evently-stripe.png">
    <img width="100%" src="./public/assets/evently-orders.png">
</div>

## Demo Evently

Let's try it.

<a href="https://event-platform-liard-eta.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Tweeter%20Page-Link%20Demo-blue.svg?style=popout&logo=googlechrome"/>
</a>