---
title: "MeshCore SAR"
subtitle: "Off-Grid LoRa Coordination for Search & Rescue"
description: "MeshCore SAR turns phones and MeshCore radios into a resilient field coordination system with messaging, GPS tracking, and offline tactical mapping."
date: 2025-10-18
draft: false
layout: "single"
---

# MeshCore SAR

Off-grid LoRa coordination for search and rescue.

MeshCore SAR is a communication layer for search and rescue teams working beyond cellular coverage. Paired with MeshCore radios, it gives a team messaging, GPS positioning, and offline tactical mapping when the usual infrastructure is gone.

## Features

- Works without cellular service or internet access
- Long-range, multi-hop transport over MeshCore LoRa radios
- Live location, bearing, and distance for every contact
- Offline vector maps with field drawing tools
- Geo-tagged SAR markers such as Found Person, Fire Location, Staging Area, and Object Found
- Direct messages, shared channels, and persistent rooms
- Battery telemetry for teammates in the field
- Compass pointing toward contacts and markers
- Role badges so team roles are visible at a glance
- Automatic relaying through the mesh

## Hardware requirements

MeshCore SAR needs MeshCore devices for LoRa transport. The app connects to those radios over Bluetooth and turns a smartphone into a field terminal for coordination and navigation.

It works with dedicated MeshCore nodes built for field deployment, repeaters that are already installed, other team members' client devices, and room nodes acting as persistent hubs. Because it uses the same devices, a team can extend an existing MeshCore network or set up a new one without changing how it operates.

## Communication

Messages come in four forms: private one-to-one messages, public channels for network-wide updates, rooms that keep a shared log such as *General* or *Emergency*, and SAR marker messages, which are geo-tagged alerts with delivery tracking.

The tactical display uses offline vector maps (MBTiles) with street, topo, and satellite layers. SAR event markers are color-coded by incident type. Drawing tools cover routes, search zones, and quick annotations, and the compass gives direction and range to people, nodes, and markers.

## Client device improvements

The client-side work targets reliability in the field and clearer information at a glance:

- Localized interfaces, including Slovenian and Croatian
- Watchdog timer that recovers automatically from software freezes
- NRF52 hardware watchdog, which reduces the risk of device lockups
- Redesigned device screens with simpler navigation and cleaner layouts
- GPS display showing both fix age and accuracy

## Download

Source, releases, and project updates are on GitHub: [dz0ny/meshcore-sar](https://github.com/dz0ny/meshcore-sar)

---

## Additional information

- [Privacy Policy](/meshcore-sar/privacy-policy/): how the app handles your data
- [Contact](/meshcore-sar/contact/): questions and feedback

Built for search and rescue operations. [Source on GitHub](https://github.com/dz0ny/meshcore-sar)
