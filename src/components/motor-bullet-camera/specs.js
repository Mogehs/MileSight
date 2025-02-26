export const models = [
  {
    title: "Non-NDAA",
    items: ["MS-C2975-R(T)F(I)PC", "MS-C5375-F(I)PC", "MS-C8175-F(I)PC"],
  },
  {
    title: "NDAA",
    items: [
      "MS-C2975-(R)FPD",
      "MS-C4575-FPD",
      "MS-C5375-FPD",
      "MS-C8175-(S)FPD",
    ],
  },
  {
    title: "Project Based",
    items: ["MS-C5375-FPD"],
  },
];

export const cameraSpecifications = [
  { label: "Name", value: "2MP AI Motorized Dome Network Camera" },
  { label: "Image Sensor", value: "	1/2.8″ Progressive Scan CMOS" },
  {
    label: "Min Illumination",
    value: "Color: 0.005Lux @F1.4 || B/W: 0Lux with IR on",
  },
  {
    label: "WDR",
    value: "	140dB Super WDR (Super WDR Pro is optional for T Series)",
  },
  { label: "Shutter Time", value: "1/100000s∼1s" },
  { label: "Day/Night Mode", value: "Day/Night/Auto/Customize/Schedule" },
  { label: "IR Distance", value: "Up to 50m" },
  { label: "S/N", value: ">55dB" },
];
export const lensSpecifications = [
  {
    label: "Lens",
    value: "Motorized 2.7~13.5mm/3.0~10.5mm/7~22mm@F1.4, P-Iris (Optional)",
  },
  {
    label: "Field of View",
    value: [
      "H111°~H34° / D130°~D39° / V60°~V19° (2.7~13.5mm)",
      "H100°~H33° / D115°~D38° / V54°~V18° (3.0~10.5mm)",
      "H42°~H17° / D48°~D19° / V24°~V9° (7~22mm)",
    ],
  },
  {
    label: "Mount",
    value: "Φ14",
  },
  {
    label: "Focus Control",
    value: "Auto/Manual",
  },
  {
    label: "Iris Control (Optional for I Series)",
    value: "Auto/Manual",
  },
];
export const videoSpecifications = [
  {
    label: "Max. Image Resolution",
    value: "1920x1080",
  },
  {
    label: "Primary Stream",
    value: [
      "60Hz: 100fps@(1920x1080) (Optional for T Series), 60fps@(1920x1080, 1280x960, 1280x720, 704x576)",
      "50Hz: 100fps@(1920x1080) (Optional for T Series), 50fps@(1920x1080, 1280x960, 1280x720, 704x576)",
    ],
  },
  {
    label: "Secondary Stream",
    value: [
      "60Hz: 60fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192, 320x180)",
      "50Hz: 50fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192, 320x180)",
    ],
  },
  {
    label: "Tertiary Stream",
    value: [
      "60Hz: 30fps@(1920x1080, 1280x720, 704x576, 640x480, 640x360, 320x240, 320x192, 320x180)",
      "50Hz: 25fps@(1920x1080, 1280x720, 704x576, 640x480, 640x360, 320x240, 320x192, 320x180)",
    ],
  },
  {
    label: "Video Compression",
    value: "H.265+/H.265 (HEVC) / H.264+ / H.264 / MJPEG",
  },
  {
    label: "Video Bit Rate",
    value: "16Kbps∼16Mbps (CBR/VBR Adjustable)",
  },
  {
    label: "Privacy Masking",
    value: "Up to 28 areas (24 mask areas and 4 mosaic areas)",
  },
  {
    label: "ROI",
    value: "Up to 8 areas",
  },
  {
    label: "Image Settings",
    value: "Saturation / Brightness / Contrast / Sharpness",
  },
];

export const interfaceSpecifications = [
  {
    label: "Ethernet",
    value: "1× RJ45 10M/100M Ethernet Port",
  },
  {
    label: "Audio I/O",
    value: "Built-in Microphone; 1/1 (Multi-interface Version)",
  },
  {
    label: "Alarm I/O",
    value: "1/1 (Multi-interface Version)",
  },
];
export const networkSpecifications = [
  {
    label: "Network Storage",
    value: "NAS (Support NFS, SMB/CIFS), ANR",
  },
  {
    label: "Network Protocols",
    value:
      "IPv4/IPv6, ARP, TCP, UDP, RTCP, RTP, RTSP, RTMP, HTTP, HTTPS, DNS, DDNS, DHCP, FTP, NTP, SMTP, UPnP, Bonjour, SIP, SNMP, PPPoE, VLAN, 802.1x, QoS, IGMP, ICMP, SSL",
  },
];

export const audioSpecifications = [
  {
    label: "Audio Compression",
    value: "G.711 / AAC / G.722 / G.726",
  },
  {
    label: "Audio Sampling Rate",
    value: "8 / 16 / 32 / 44.1 / 48KHz",
  },
  {
    label: "Audio Bit Rate",
    value: "16~256kbps",
  },
  {
    label: "Two-way Audio",
    value: "Support",
  },
];

export const analyticSpecifications = [
  {
    label: "Video Analysis",
    value: [
      "Region Entrance",
      "Region Exiting",
      "Advanced Motion Detection",
      "Tamper Detection",
      "Line Crossing",
      "Loitering",
      "Object Left",
      "Object Removed",
    ],
  },
  {
    label: "Face Detection",
    value: "Detect and capture faces, get real-time snapshots",
  },
  {
    label: "People Counting & Report",
    value:
      "Count the number of people entering or exiting, up to 4 detection areas for regional people counting",
  },
];
export const systemSpecifications = [
  {
    label: "Storage",
    value: "Supports microSD/SDHC/SDXC Card Local Storage, up to 256G",
  },
  {
    label: "Advanced Functions",
    value: [
      "Heat Map",
      "BLC",
      "HLC",
      "2D DNR",
      "3D DNR",
      "Defog",
      "AWB",
      "EIS",
      "IP Address Filtering",
      "AGC",
      "Anti-flicker",
      "Corridor Mode",
      "Deblur",
      "Watermark",
    ],
  },
  {
    label: "SIP/VoIP Support",
    value: "Yes, Voice & Video-over-IP",
  },
  {
    label: "Event Trigger",
    value: [
      "Motion Detection",
      "Network Disconnection",
      "External Input",
      "Audio Alarm",
      "etc.",
    ],
  },
  {
    label: "Event Action",
    value: [
      "FTP Upload",
      "SMTP Upload",
      "SD Card Record",
      "External Output",
      "SIP Phone",
      "HTTP Notification",
      "etc.",
    ],
  },
  {
    label: "System Compatibility",
    value: "ONVIF Profile G, Q, S, T, API",
  },
];
export const generalSpecifications = [
  {
    label: "Working Temperature",
    value: "-40℃ ∼ 60℃",
  },
  {
    label: "Working Humidity",
    value: "0 ∼ 90% (Non-condensing)",
  },
  {
    label: "Power Supply",
    value:
      "PoE (802.3af); PoE (802.3af) / DC 12V±10% (Multi-interface Version)",
  },
  {
    label: "Power Consumption",
    value: "8W MAX, 9W MAX (With IR on)",
  },
  {
    label: "Weather Proof",
    value: "Up to IP67-rated for Weather-resistant Performance",
  },
  {
    label: "Housing",
    value: "Vandal-proof IK10-rated Metal Housing",
  },
  {
    label: "Weight",
    value: "780g",
  },
  {
    label: "Dimensions",
    value: "Φ130mm × 115mm",
  },
  {
    label: "Warranty",
    value: "3/5 Years",
  },
];
