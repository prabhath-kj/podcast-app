# Podcast Web App

## Overview

A Next.js web application where users can browse, select, and save their favorite podcasts from a large list. The app fetches podcast data from a GraphQL API, allows users to manage selected podcasts.

## Features

- **Browse Podcasts**: View a large list of podcasts, each with a title, image, and channel name.
- **Subscribe Button**: Toggle between "Subscribe" and "Selected" when removing podcasts to/from the selected list.
- **Animated Bottom Drawer**: View selected podcasts in an animated bottom drawer and delete them as needed.
- **Save Selected Podcasts**: Save selected podcasts to a backend GraphQL API.


## Tech Stack

- **Next.js** (with TypeScript)
- **GraphQL API** for fetching podcast data
- **Tailwind CSS** for styling
- **HeroUI** for UI components
- **Tanstack Query** for data fetching and state management
- **Tanstack Virtual** to optimize the list

## Installation

### Clone the repository

```bash
git clone https://github.com/prabhath-kj/podcast-app.git
cd podcast-app
