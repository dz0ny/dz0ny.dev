---
title: "MeshCore SAR"
subtitle: "Off-Grid LoRa Mesh Communication for Search & Rescue"
description: "Resilient, offline communication for field operations — built on MeshCore and LoRa mesh networking. Provides messaging, GPS tracking, and tactical mapping when cellular and internet infrastructure fail."
date: 2025-10-18
draft: false
layout: "single"
---

# MeshCore SAR

**Off-Grid LoRa Mesh Communication for Search & Rescue**

Resilient, offline communication for field operations — built on MeshCore and LoRa mesh networking. Transform ordinary smartphones into off-grid communication tools with messaging, GPS tracking, and tactical mapping even when cellular and internet infrastructure fail.

## Features

- **Off-Grid Communication** - Works without cellular or internet connectivity
- **LoRa Mesh Networking** - Leverages MeshCore devices for long-range communication
- **GPS Tracking** - Real-time location tracking with bearing and distance
- **Tactical Mapping** - Offline vector maps with drawing tools
- **SAR Markers** - Quick geo-tagged alerts (Found Person, Fire Location, Staging Area, Object Found)
- **Team Coordination** - Direct messages, public channels, and persistent rooms
- **Battery Telemetry** - Monitor team member device status
- **Compass Navigation** - Direction and range to contacts and markers
- **Role Badges** - Visual identification (Police, Firefighter, Medic)
- **Multi-hop Routing** - Automatic message relay through the mesh network

## Hardware Requirements

**MeshCore SAR requires MeshCore devices** to transmit data over the LoRa mesh network. The app connects to these devices via Bluetooth, transforming your smartphone into a mesh communication terminal.

### MeshCore Device Options
- **Dedicated MeshCore nodes** — purpose-built for field deployment
- **Existing repeaters** — leverage installed infrastructure
- **Client devices** — other team members' MeshCore units
- **Room nodes** — persistent communication hubs

**Seamless Integration**: MeshCore SAR works with any existing MeshCore network — no separate infrastructure needed.

## Communication Features

### Messages
- **Direct Messages** – private one-to-one communication
- **Public Channels** – broadcast updates across nodes
- **Rooms** – persistent logs (e.g., *General*, *Emergency*)
- **SAR Marker Messages** – geo-tagged alerts with delivery tracking

### Tactical Display
- **Offline vector maps (MBTiles)** with street, topo, and satellite layers
- **SAR event markers** — color-coded by type
- **Drawing tools** for quick visual planning (lines, rectangles, zones)
- **Compass integration** — precise direction and range to any object or person

## Client Device Improvements

The enhanced firmware brings reliability and usability improvements:

- **Multi-language support** — interface available in multiple languages including Slovenian and Croatian
- **Watchdog timer implementation** — automatic recovery from software freezes
- **NRF52 hardware watchdog** — prevents system lockups
- **Improved navigation** with redesigned screens
- **Better visual hierarchy** with optimized layouts
- **Enhanced GPS display** showing time since last fix alongside accuracy metrics

## Download

Get MeshCore SAR for your device:

**iOS (TestFlight Beta)**  
[Download for iOS](https://testflight.apple.com/join/HhzerdHp)

**Android / Windows / Linux / macOS**  
[Download Latest Release](https://meshcore-sar.dz0ny.dev/unstable/latest/index.html)

**Enhanced Client Firmware**  
[github.com/dz0ny/MeshCore/tree/revert-ble-advert](https://github.com/dz0ny/MeshCore/tree/revert-ble-advert)

---

## Additional Information

- [Privacy Policy](/meshcore-sar/privacy-policy/) - Learn how we protect your data
- [Contact](/meshcore-sar/contact/) - Get in touch with questions or feedback

Built for Search & Rescue Operations | [Open Source on GitHub](https://github.com/dz0ny/MeshCore)
