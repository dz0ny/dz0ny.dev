---
title: "MeshCore SAR"
subtitle: "Off-Grid LoRa Coordination for Search & Rescue"
description: "MeshCore SAR turns phones and MeshCore radios into a resilient field coordination system with messaging, GPS tracking, and offline tactical mapping."
date: 2025-10-18
draft: false
layout: "single"
---

# MeshCore SAR

**Off-Grid LoRa Coordination for Search & Rescue**

MeshCore SAR is a field-ready communication layer for search and rescue teams operating beyond cellular coverage. Paired with MeshCore devices, it gives teams messaging, GPS positioning, and offline tactical mapping when normal infrastructure is unavailable.

## Features

- **Off-Grid Communication** - Operates without cellular service or internet access
- **LoRa Mesh Networking** - Uses MeshCore radios for long-range, multi-hop transport
- **GPS Tracking** - Shows live location, bearing, and distance
- **Tactical Mapping** - Combines offline vector maps with field drawing tools
- **SAR Markers** - Sends fast geo-tagged alerts such as Found Person, Fire Location, Staging Area, and Object Found
- **Team Coordination** - Supports direct messages, shared channels, and persistent rooms
- **Battery Telemetry** - Surfaces device health for teammates in the field
- **Compass Navigation** - Points operators toward contacts and markers
- **Role Badges** - Makes team roles instantly visible
- **Multi-hop Routing** - Relays messages automatically through the mesh

## Hardware Requirements

**MeshCore SAR requires MeshCore devices** for LoRa transport. The app connects to those radios over Bluetooth and turns a smartphone into a practical field terminal for coordination and navigation.

### MeshCore Device Options
- **Dedicated MeshCore nodes** — purpose-built for field deployment
- **Existing repeaters** — leverage installed infrastructure
- **Client devices** — other team members' MeshCore units
- **Room nodes** — persistent communication hubs

**Seamless Integration**: MeshCore SAR fits into existing MeshCore deployments, so teams can extend a current network or stand up a new one without changing the operating model.

## Communication Features

### Messages
- **Direct Messages** – private one-to-one coordination
- **Public Channels** – broad updates across the network
- **Rooms** – persistent shared logs such as *General* or *Emergency*
- **SAR Marker Messages** – geo-tagged alerts with delivery tracking

### Tactical Display
- **Offline vector maps (MBTiles)** with street, topo, and satellite layers
- **SAR event markers** — color-coded by incident type
- **Drawing tools** for routes, search zones, and quick field annotations
- **Compass integration** — precise direction and range to people, nodes, and markers

## Client Device Improvements

The client-side improvements focus on reliability in the field and clearer at-a-glance information:

- **Multi-language support** — includes localized interfaces such as Slovenian and Croatian
- **Watchdog timer implementation** — recovers automatically from software freezes
- **NRF52 hardware watchdog** — reduces the risk of device lockups
- **Improved navigation** with redesigned device screens
- **Better visual hierarchy** with cleaner layouts
- **Enhanced GPS display** showing both fix age and accuracy

## Download

Explore MeshCore SAR on GitHub:

**Source, releases, and project updates**  
[View on GitHub](https://github.com/dz0ny/meshcore-sar)

---

## Additional Information

- [Privacy Policy](/meshcore-sar/privacy-policy/) - Learn how we protect your data
- [Contact](/meshcore-sar/contact/) - Get in touch with questions or feedback

Built for Search & Rescue Operations | [Open Source on GitHub](https://github.com/dz0ny/meshcore-sar)
