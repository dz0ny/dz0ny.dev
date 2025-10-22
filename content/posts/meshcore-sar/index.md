---
title: "MeshCore SAR"
subtitle: "Off-Grid LoRa Mesh Communication for Search & Rescue"
description: "Resilient, offline communication for field operations — built on MeshCore and LoRa mesh networking."
date: 2025-10-18
draft: false
tags: ["meshcore", "sar", "lora", "communication", "offline", "mesh-networking"]
categories: ["technology", "communication"]
---
![Featured](featured.jpg)
## Overview

**MeshCore SAR** transforms ordinary smartphones into **off-grid communication tools**.  
It provides **messaging, GPS tracking, and tactical mapping** even when cellular and internet infrastructure fail. It uses MeshCore network and devices to do so.

---

## Hardware & Infrastructure

**MeshCore SAR requires MeshCore devices** to transmit data over the LoRa mesh network.  
The app connects to these devices via Bluetooth, transforming your smartphone into a mesh communication terminal.

### MeshCore Device Options
- **Dedicated MeshCore nodes** — purpose-built for field deployment  
- **Existing repeaters** — leverage installed infrastructure  
- **Client devices** — other team members' MeshCore units  
- **Room nodes** — persistent communication hubs  

> **Seamless Integration**: MeshCore SAR works with any existing MeshCore network — no separate infrastructure needed.

Whether you're extending an established mesh or starting fresh, every MeshCore device becomes part of your resilient communication backbone.


---

## Client Devices

<div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
  <div style="text-align: center;">
    <a href="app-1.jpg" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="app-1.jpg" alt="Client device view 1" width="300" >}}
    </a>
  </div>
  <div style="text-align: center;">
    <a href="app-2.jpg" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="app-2.jpg" alt="Client device view 2" width="300" >}}
    </a>
  </div>
  <div style="text-align: center;">
    <a href="app-3.jpg" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="app-3.jpg" alt="Client device view 3" width="300" >}}
    </a>
  </div>
  <div style="text-align: center;">
    <a href="app-4.jpg" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="app-4.jpg" alt="Client device view 4" width="300" >}}
    </a>
  </div>
</div>

The new interface takes inspiration from **Meshtastic InkHUD**, bringing a clean, information-dense display to MeshCore devices:

- **Improved navigation** with redesigned screens for Messages, Contacts, and Settings
- **Multi-language support** — interface available in multiple languages including Slovenian and Croatian
- **Better visual hierarchy** with optimized font usage and screen layouts
- **Enhanced GPS display** showing time since last fix alongside accuracy metrics

### Reliability Improvements
**Watchdog timer implementation** ensures your device stays operational when you need it most:
- **Automatic recovery** from software freezes
- **NRF52 hardware watchdog** prevents system lockups
- **Continuous operation** in harsh field conditions
- **No manual intervention** required — devices self-recover from crashes

These improvements mean your MeshCore device remains a dependable communication lifeline throughout extended SAR operations.

### Get the Enhanced Firmware
Find the latest client device patches and improvements at:  
**[github.com/dz0ny/MeshCore/tree/revert-ble-advert](https://github.com/dz0ny/MeshCore/tree/revert-ble-advert)**

---

## Messages

<style>
.image-link::after {
  display: none !important;
  content: none !important;
}
</style>

<div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
  <div style="text-align: center;">
    <h4>Messages View</h4>
    <a href="messages-1.png" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="messages-1.png" alt="Messages view" width="200" >}}
    </a>
  </div>
  <div style="text-align: center;">
    <h4>Send SAR Marker</h4>
    <a href="messages-2.png" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="messages-2.png" alt="Send SAR marker" width="200" >}}
    </a>
  </div>
  <div style="text-align: center;">
    <h4>SAR Alerts Feed</h4>
    <a href="messages-3.png" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="messages-3.png" alt="SAR alerts" width="200" >}}
    </a>
  </div>
</div>

### Mission Communication
- **Direct Messages** – private one-to-one communication  
- **Public Channels** – broadcast updates across nodes  
- **Rooms** – persistent logs (e.g., *General*, *Emergency*)  

### SAR Marker Messages
Easily send geo-tagged alerts:  
*Found Person* • *Fire Location* • *Staging Area* • *Object Found*

Messages appear instantly on the map with delivery tracking (Sent / Delivered / Retrying / Failed).

---

## Contacts

<div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
  <div style="text-align: center;">
    <h4>Team List</h4>
    <a href="contacts-1.png" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="contacts-1.png" alt="Contacts list" width="200" >}}
    </a>
  </div>
  <div style="text-align: center;">
    <h4>Contact Details</h4>
    <a href="contacts-2.png" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="contacts-2.png" alt="Contact detail" width="200" >}}
    </a>
  </div>
  <div style="text-align: center;">
    <h4>Compass View</h4>
    <a href="contacts-3.png" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="contacts-3.png" alt="Compass orientation" width="200" >}}
    </a>
  </div>
</div>

### Situational Awareness
- Real-time **GPS**, **bearing**, and **distance** to each member  
- **Battery telemetry** and **voltage readings**  
- **Routing path** indicator (Direct / Multi-hop / Flood)  
- **Role badges** for clarity (Police, Firefighter, Medic)  
- Compass shows direction and proximity of all contacts and SAR markers  

---

## Map

<div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
  <div style="text-align: center;">
    <h4>Tactical Map</h4>
    <a href="map-1.png" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="map-1.png" alt="Map Ljubljana" width="200" >}}
    </a>
  </div>
  <div style="text-align: center;">
    <h4>Drawing Tools</h4>
    <a href="map-2.png" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="map-2.png" alt="Drawing tools" width="200" >}}
    </a>
  </div>
  <div style="text-align: center;">
    <h4>Compass Navigation</h4>
    <a href="map-3.png" target="_blank" class="image-link" style="text-decoration: none; border: none;">
      {{< img src="map-3.png" alt="Compass detail" width="200" >}}
    </a>
  </div>
</div>

### Tactical Display
- **Offline vector maps (MBTiles)** with street, topo, and satellite layers  
- **SAR event markers** — color-coded by type  
- **Drawing tools** for quick visual planning (lines, rectangles, zones)  
- **Compass integration** — precise direction and range to any object or person  

You can Plan, navigate, and execute — all offline.

---

## FAQ

### **Q: Is this a fork of MeshCore?**
**A:** No. MeshCore SAR is a specialized **app** that works with existing MeshCore infrastructure and devices. Messages remain ASCII-only and human-readable — the app simply wraps UI widgets around recognized SAR message formats.

### **Q: Can I use existing MeshCore repeaters in my area?**
**A:** Yes! MeshCore SAR works with any existing MeshCore network. However, you'll need to know the correct frequency and settings.

### **Q: What if there are no repeaters nearby?**
**A:** You can still communicate **companion-to-companion** directly, though range will be limited. Even adding just **one repeater** to your group significantly improves performance and coverage.

### **Q: How does this work with SAR teams that have their own equipment?**
**A:** SAR teams can deploy their own MeshCore infrastructure or integrate with existing networks.

### **Q: Will SAR features be merged into the main MeshCore app?**
**A:** The core messaging remains compatible. SAR-specific features (offline maps, tactical drawing, compass navigation) are specialized tools that work best in a dedicated app.

---

## Download

Get MeshCore SAR for your device:

**iOS (TestFlight Beta)**  
[Download for iOS](https://testflight.apple.com/join/HhzerdHp)

**Android**  
[Download APK](https://drive.google.com/file/d/1vuwh65CTBTLrj4HXJBa4nSXxcHicUcN0/view?usp=sharing)
