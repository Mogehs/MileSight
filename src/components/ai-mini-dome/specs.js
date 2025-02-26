export const allModels = [
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
    items: ["MS-C5375-FPDB"],
  },
];

export const cameraSpecifications1 = [
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
export const lensSpecifications1 = [
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
export const videoSpecifications1 = [
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

export const interfaceSpecifications1 = [
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
export const networkSpecifications1 = [
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

export const audioSpecifications1 = [
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

export const analyticSpecifications1 = [
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
export const systemSpecifications1 = [
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
export const generalSpecifications1 = [
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

export const cameraSpecifications2 = [
  { label: "Name", value: "5MP AI Motorized Dome Network Camera" },
  { label: "Image Sensor", value: "1/2.8″ Progressive Scan CMOS" },
  {
    label: "Min. Illumination",
    value: ["Color: 0.008Lux @F1.4", "B/W: 0Lux with IR on"],
  },
  { label: "WDR", value: "120dB Super WDR" },
  { label: "Shutter Time", value: "1/100000s∼1s" },
  { label: "Day/Night Mode", value: "Day/Night/Auto/Customize/Schedule" },
  { label: "IR Distance", value: "Up to 50m" },
  { label: "S/N", value: ">55dB" },
];

export const lensSpecifications2 = [
  {
    label: "Lens",
    value: "Motorized 2.7~13.5mm/3.0~10.5mm/7~22mm@F1.4, P-Iris(Optional)",
  },
  {
    label: "Field of View",
    value: [
      "H99°~H31°/D124°~D38°/V72°~V23°(2.7~13.5mm)",
      "H89°~H31°/D111°~D38°/V66°~V23°(3.0~10.5mm)",
      "H37°~H15°/D46°~D19°/V28°~V11°(7~22mm)",
    ],
  },
  { label: "Mount", value: "Φ14" },
  { label: "Focus Control", value: "Auto/Manual" },
  { label: "Iris Control (Optional for I Series)", value: "Auto/Manual" },
];

export const videoSpecifications2 = [
  { label: "Max. Image Resolution", value: "2592x1944" },
  {
    label: "Primary Stream",
    value: [
      "60Hz: 30fps@(2592x1944), 45fps@(2048x1536), 60fps@(1920x1080, 1280x960, 1280x720, 704x576)",
      "50Hz: 25fps@(2592x1944), 45fps@(2048x1536), 50fps@(1920x1080, 1280x960, 1280x720, 704x576)",
    ],
  },
  {
    label: "Secondary Stream",
    value: [
      "60Hz: 30fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192, 320x180)",
      "50Hz: 25fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192, 320x180)",
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
    value: "H.265+/H.265(HEVC)/H.264+/H.264/MJPEG",
  },
  { label: "Video Bit Rate", value: "16Kbps∼16Mbps (CBR/VBR Adjustable)" },
  {
    label: "Privacy Masking",
    value: "Up to 28 areas(24 mask areas and 4 mosaic areas)",
  },
  { label: "ROI", value: "Up to 8 areas" },
  {
    label: "Image Settings",
    value: "Saturation/Brightness/Contrast/Sharpness",
  },
];

export const interfaceSpecifications2 = [
  { label: "Ethernet", value: "1*RJ45 10M/100M Ethernet Port" },
  {
    label: "Audio I/O",
    value: "Built-in Microphone; 1/1 (Multi-interface Version)",
  },
  { label: "Alarm I/O", value: "1/1 (Multi-interface Version)" },
];

export const networkSpecifications2 = [
  { label: "Network Storage", value: "NAS(Support NFS, SMB/CIFS), ANR" },
  {
    label: "Network Protocols",
    value: [
      "IPv4/IPv6, ARP, TCP, UDP, RTCP, RTP, RTSP, RTMP, HTTP, HTTPS, DNS, DDNS, DHCP, FTP, NTP, SMTP, UPnP, Bonjour, SIP, SNMP, PPPoE, VLAN, 802.1x, QoS, IGMP, ICMP, SSL",
    ],
  },
];

export const audioSpecifications2 = [
  { label: "Audio Compression", value: "G.711/AAC/G.722/G.726" },
  { label: "Audio Sampling Rate", value: "8/16/32/44.1/48KHz" },
  { label: "Audio Bit Rate", value: "16~256kbps" },
  { label: "Two-way Audio", value: "Support" },
];

export const analyticSpecifications2 = [
  {
    label: "Video Analysis",
    value: [
      "Region Entrance, Region Exiting, Advanced Motion Detection, Tamper Detection, Line Crossing, Loitering, Object Left, Object Removed",
    ],
  },
  {
    label: "Face detection",
    value: "Detect and capture faces, get real-time snapshots",
  },
  {
    label: "People Counting & Report",
    value:
      "Count the number of people entering or exiting, up to 4 detection areas for regional people counting",
  },
];

export const systemSpecifications2 = [
  {
    label: "Storage",
    value: "Support microSD/SDHC/SDXC Card Local Storage, up to 256G",
  },
  {
    label: "Advanced Function",
    value: [
      "Heat Map, BLC, HLC, 2D DNR, 3D DNR, Defog, AWB, EIS, IP Address Filtering, AGC, Anti-flicker, Corridor Mode, Deblur, Watermark",
    ],
  },
  { label: "SIP/VoIP Support", value: "Yes, Voice & Video-over-IP" },
  {
    label: "Event Trigger",
    value:
      "Motion Detection, Network Disconnection, External Input, Audio Alarm, etc.",
  },
  {
    label: "Event Action",
    value:
      "FTP Upload, SMTP Upload, SD Card Record, External Output, SIP Phone, HTTP Notification, etc.",
  },
  { label: "System Compatibility", value: "ONVIF Profile G & Q & S & T, API" },
];

export const generalSpecifications2 = [
  { label: "Working Temperature", value: "-40℃∼60℃" },
  { label: "Working Humidity", value: "0∼90%(Non-condensing)" },
  {
    label: "Power Supply",
    value:
      "PoE (802.3af); PoE (802.3af) / DC 12V±10% (Multi-interface Version)",
  },
  { label: "Power Consumption", value: "7W MAX, 9W MAX (With IR on)" },
  {
    label: "Weather Proof",
    value: "Up to IP67-rated for Weather-resistant Performance",
  },
  { label: "Housing", value: "Vandal-proof IK10-rated Metal Housing" },
  { label: "Weight", value: "780g" },
  { label: "Dimensions", value: "Φ130mmX115mm" },
  { label: "Warranty", value: "3/5 Years" },
];
export const cameraSpecifications3 = [
  { label: "Name", value: "4K AI Motorized Dome Network Camera" },
  { label: "Image Sensor", value: "1/2.8″ Progressive Scan CMOS" },
  {
    label: "Min. Illumination",
    value: ["Color: 0.012Lux @F1.4", "B/W: 0Lux with IR on"],
  },
  { label: "WDR", value: "120dB Super WDR" },
  { label: "Shutter Time", value: "1/100000s∼1s" },
  { label: "Day/Night Mode", value: "Day/Night/Auto/Customize/Schedule" },
  { label: "IR Distance", value: "Up to 50m" },
  { label: "S/N", value: ">55dB" },
];

export const lensSpecifications3 = [
  { label: "Lens", value: "Motorized 2.7~13.5mm@F1.4, P-Iris(Optional)" },
  { label: "Field of View", value: "H107°~H33° / D125°~D37° / V58°~V18°" },
  { label: "Mount", value: "Φ14" },
  { label: "Focus Control", value: "Auto/Manual" },
  { label: "Iris Control (Optional for I Series)", value: "Auto/Manual" },
];

export const videoSpecifications3 = [
  { label: "Max. Image Resolution", value: "3840x2160" },
  {
    label: "Primary Stream",
    value: [
      "60Hz: 30fps@(3840x2160, 3072x2048, 2592x1944, 2592x1520, 2048x1536, 1920x1080, 1280x960, 1280x720, 704x576)",
      "50Hz: 25fps@(3840x2160, 3072x2048, 2592x1944, 2592x1520, 2048x1536, 1920x1080, 1280x960, 1280x720, 704x576)",
    ],
  },
  {
    label: "Secondary Stream",
    value: [
      "60Hz: 30fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192, 320x180)",
      "50Hz: 25fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192, 320x180)",
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
    value: "H.265+/H.265(HEVC)/H.264+/H.264/MJPEG",
  },
  { label: "Video Bit Rate", value: "16Kbps∼16Mbps (CBR/VBR Adjustable)" },
  {
    label: "Privacy Masking",
    value: "Up to 28 areas(24 mask areas and 4 mosaic areas)",
  },
  { label: "ROI", value: "Up to 8 areas" },
  {
    label: "Image Settings",
    value: "Saturation/Brightness/Contrast/Sharpness",
  },
];

export const interfaceSpecifications3 = [
  { label: "Ethernet", value: "1*RJ45 10M/100M Ethernet Port" },
  {
    label: "Audio I/O",
    value: "Built-in Microphone; 1/1 (Multi-interface Version)",
  },
  { label: "Alarm I/O", value: "1/1 (Multi-interface Version)" },
];

export const networkSpecifications3 = [
  { label: "Network Storage", value: "NAS(Support NFS, SMB/CIFS), ANR" },
  {
    label: "Network Protocols",
    value: [
      "IPv4/IPv6, ARP, TCP, UDP, RTCP, RTP, RTSP, RTMP, HTTP, HTTPS, DNS, DDNS, DHCP, FTP, NTP, SMTP, UPnP, Bonjour, SIP, SNMP, PPPoE, VLAN, 802.1x, QoS, IGMP, ICMP, SSL",
    ],
  },
];

export const audioSpecifications3 = [
  { label: "Audio Compression", value: "G.711/AAC/G.722/G.726" },
  { label: "Audio Sampling Rate", value: "8/16/32/44.1/48KHz" },
  { label: "Audio Bit Rate", value: "16~256kbps" },
  { label: "Two-way Audio", value: "Support" },
];

export const analyticSpecifications3 = [
  {
    label: "Video Analysis",
    value: [
      "Region Entrance, Region Exiting, Advanced Motion Detection, Tamper Detection, Line Crossing, Loitering, Object Left, Object Removed",
    ],
  },
  {
    label: "Face detection",
    value: "Detect and capture faces, get real-time snapshots",
  },
  {
    label: "People Counting & Report",
    value:
      "Count the number of people entering or exiting, up to 4 detection areas for regional people counting",
  },
];

export const systemSpecifications3 = [
  {
    label: "Storage",
    value: "Support microSD/SDHC/SDXC Card Local Storage, up to 256G",
  },
  {
    label: "Advanced Function",
    value: [
      "Heat Map, BLC, HLC, 2D DNR, 3D DNR, Defog, AWB, EIS, IP Address Filtering, AGC, Anti-flicker, Corridor Mode, Deblur, Watermark",
    ],
  },
  { label: "SIP/VoIP Support", value: "Yes, Voice & Video-over-IP" },
  {
    label: "Event Trigger",
    value:
      "Motion Detection, Network Disconnection, External Input, Audio Alarm, etc.",
  },
  {
    label: "Event Action",
    value:
      "FTP Upload, SMTP Upload, SD Card Record, External Output, SIP Phone, HTTP Notification, etc.",
  },
  { label: "System Compatibility", value: "ONVIF Profile G & Q & S & T, API" },
];

export const generalSpecifications3 = [
  { label: "Working Temperature", value: "-40℃∼60℃" },
  { label: "Working Humidity", value: "0∼90%(Non-condensing)" },
  {
    label: "Power Supply",
    value:
      "PoE (802.3af); PoE (802.3af) / DC 12V±10% (Multi-interface Version)",
  },
  { label: "Power Consumption", value: "8W MAX, 9W MAX (With IR on)" },
  {
    label: "Weather Proof",
    value: "Up to IP67-rated for Weather-resistant Performance",
  },
  { label: "Housing", value: "Vandal-proof IK10-rated Metal Housing" },
  { label: "Weight", value: "780g" },
  { label: "Dimensions", value: "Φ130mmX115mm" },
  { label: "Warranty", value: "3/5 Years" },
];
export const cameraSpecifications4 = [
  { label: "Name", value: "5MP NDAA AI Motorized Dome Network Camera" },
  { label: "Image Sensor", value: "1/2.8″ Progressive Scan CMOS" },
  { label: "Min. Illumination", value: "Not specified" },
  { label: "WDR", value: "120dB Super WDR" },
  { label: "Shutter Time", value: "1/100000s~1s" },
  { label: "IR Distance", value: "Up to 50m" },
  { label: "Day/Night Mode", value: "Day/Night/Auto/Customize/Schedule" },
  { label: "S/N", value: ">55dB" },
];

export const lensSpecifications4 = [
  { label: "Lens", value: "Motorized 2.7~13.5mm/7~22mm@F1.4" },
  {
    label: "Field of View",
    value: [
      "H99°~H31° / D124°~D38° / V72°~V23° (2.7~13.5mm)",
      "H37°~H15° / D46°~D19° / V28°~V11° (7~22mm)",
    ],
  },
  { label: "Mount", value: "Φ14" },
  { label: "Focus Control", value: "Auto/Manual" },
];

export const videoSpecifications4 = [
  { label: "Max. Image Resolution", value: "2592x1944" },
  {
    label: "Primary Stream",
    value: [
      "60Hz: 30fps@(2592x1944, 2048x1536, 1920x1080, 1280x960, 1280x720, 704x576)",
      "50Hz: 25fps@(2592x1944, 2048x1536, 1920x1080, 1280x960, 1280x720, 704x576)",
    ],
  },
  {
    label: "Secondary Stream",
    value: [
      "60Hz: 30fps@(704x576, 640x480, 640x360, 352x288)",
      "50Hz: 25fps@(704x576, 640x480, 640x360, 352x288)",
    ],
  },
  {
    label: "Tertiary Stream",
    value: [
      "60Hz: 30fps@(1280x720, 704x576, 640x480, 640x360, 352x288)",
      "50Hz: 25fps@(1280x720, 704x576, 640x480, 640x360, 352x288)",
    ],
  },
  {
    label: "Video Compression",
    value: "H.265+/H.265(HEVC)/H.264+/H.264/MJPEG",
  },
  { label: "Video Bit Rate", value: "16Kbps~16Mbps (CBR/VBR Adjustable)" },
  { label: "Privacy Masking", value: "Up to 4 areas" },
  { label: "ROI", value: "Up to 8 areas" },
  { label: "Image Setting", value: "Brightness/Contrast/Saturation/Sharpness" },
];

export const interfaceSpecifications4 = [
  { label: "Ethernet", value: "1*RJ45 10M/100M Ethernet Port" },
  {
    label: "Audio I/O",
    value: "Built-in Microphone; 1/1 (Multi-interface Version)",
  },
  { label: "Alarm I/O", value: "1/1 (Multi-interface Version)" },
];

export const networkSpecifications4 = [
  { label: "Network Storage", value: "NAS(Support NFS, SMB/CIFS)" },
  {
    label: "Protocol",
    value: [
      "IPv4/IPv6, ARP, TCP, UDP, RTCP, RTP, RTSP, RTMP, HTTP, HTTPS, DNS, DDNS, DHCP, FTP, NTP, SMTP, SNMP, UPnP, Bonjour, SIP, PPPoE, VLAN, 802.1x, QoS, IGMP, ICMP, SSL, TLS 1.2",
    ],
  },
];

export const audioSpecifications4 = [
  { label: "Audio Compression", value: "G.711/AAC/G.722/G.726" },
  { label: "Audio Sampling Rate", value: "8/16/32/48KHz" },
  { label: "Audio Bit Rate", value: "16~256kbps" },
];

export const analyticSpecifications4 = [
  {
    label: "Video Analysis",
    value: [
      "Region Entrance, Region Exiting, Advanced Motion Detection, Line Crossing, Loitering, Object Left, Object Removed",
    ],
  },
  {
    label: "People Counting & Report",
    value: "Count the number of people entering or exiting",
  },
];

export const systemSpecifications4 = [
  {
    label: "Storage",
    value: "Support microSD/SDHC/SDXC Card Local Storage, up to 1TB",
  },
  {
    label: "Advanced Function",
    value: [
      "BLC, HLC, 2D DNR, 3D DNR, Defog, AWB, IP Address Filtering, AGC, Anti-flicker, Corridor Mode, Deblur",
    ],
  },
  { label: "SIP/VoIP Support", value: "Yes, Voice & Video-over-IP" },
  {
    label: "Event Trigger",
    value:
      "Motion Detection, Tamper Detection, Network Disconnection, External Input, Audio Alarm, etc.",
  },
  {
    label: "Event Action",
    value:
      "FTP Upload, SMTP Upload, SD Card Record, External Output, SIP Phone, HTTP Notification, etc.",
  },
  { label: "System Compatibility", value: "ONVIF Profile G & S & T, API" },
];

export const generalSpecifications4 = [
  { label: "Working Temperature", value: "-40℃~60℃" },
  { label: "Working Humidity", value: "10%~95% (Non-condensing)" },
  {
    label: "Power Supply",
    value:
      "PoE (802.3af); PoE (802.3af) / DC 12V±10% (Multi-interface Version)",
  },
  {
    label: "Power Consumption",
    value: ["Min.: 2.8W (DC 12V), 3.7W (PoE)", "Max.: 6W (DC 12V), 7.4W (PoE)"],
  },
  { label: "Weight", value: "780g" },
  { label: "Dimensions", value: "Φ130mmX115mm" },
  { label: "Warranty", value: "3/5 Years" },
];

export const certificationSpecifications4 = [
  { label: "EMC", value: "CE-EMC (EN 55032, EN 55035), FCC (PART 15B)" },
  { label: "Safety", value: "CE-LVD (EN IEC 62368-1)" },
  {
    label: "Environment",
    value: "CE-ROHS (Directive (EU) 2015/863 amending 2011/65/EU)",
  },
  { label: "Protection", value: "IP67, IK10" },
];

export const cameraSpecifications5 = [
  { label: "Name", value: "2MP NDAA AI Motorized Dome Network Camera" },
  { label: "Image Sensor", value: '1/2.8" Progressive Scan CMOS' },
  {
    label: "Min. Illumination",
    value: "Color: 0.005Lux @F1.4, B/W: 0Lux with IR on",
  },
  { label: "WDR", value: "120dB Super WDR" },
  { label: "Shutter Time", value: "1/100000s∼1s" },
  { label: "Day/Night Mode", value: "Day/Night/Auto/Customize/Schedule" },
  { label: "IR Distance", value: "Up to 50m" },
  { label: "S/N", value: ">55dB" },
];

export const lensSpecifications5 = [
  { label: "Lens", value: "Motorized 2.7∼13.5mm/7∼22mm @F1.4" },
  {
    label: "Field of View",
    value: [
      "H97°~H31° / D113°~D36° / V53°~V18° (2.7~13.5mm)",
      "H42°∼H17° / D48°∼D19° / V24°∼V9° (7∼22mm)",
    ],
  },
  { label: "Mount", value: "Φ14" },
  { label: "Focus Control", value: "Auto/Manual" },
  { label: "Iris Control", value: "-" },
];

export const videoSpecifications5 = [
  { label: "Max. Image Resolution", value: "1920x1080" },
  {
    label: "Primary Stream",
    value: [
      "60Hz: 60fps@(1920x1080)(Optional for R Series), 30fps@(1920x1080, 1280x960, 1280x720, 704x576)",
      "50Hz: 50fps@(1920x1080)(Optional for R Series), 25fps@(1920x1080, 1280x960, 1280x720, 704x576)",
    ],
  },
  {
    label: "Secondary Stream",
    value: [
      "60Hz: 30fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
      "50Hz: 25fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
    ],
  },
  {
    label: "Tertiary Stream",
    value: [
      "60Hz: 30fps@(1280x720, 704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
      "50Hz: 25fps@(1280x720, 704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
    ],
  },
  {
    label: "Video Compression",
    value: "H.265+/H.265(HEVC)/H.264+/H.264/MJPEG",
  },
  { label: "Video Bit Rate", value: "16Kbps∼16Mbps (CBR/VBR Adjustable)" },
  { label: "Privacy Masking", value: "Up to 4 areas" },
  { label: "ROI", value: "Up to 8 areas" },
  {
    label: "Image Settings",
    value: "Saturation/Brightness/Contrast/Sharpness",
  },
];

export const interfaceSpecifications5 = [
  { label: "Ethernet", value: "1*RJ45 10M/100M Ethernet Port" },
  {
    label: "Audio I/O",
    value: "Built-in Microphone; 1/1 (Multi-interface Version)",
  },
  { label: "Alarm I/O", value: "1/1 (Multi-interface Version)" },
];

export const networkSpecifications5 = [
  { label: "Network Storage", value: "NAS (Support NFS, SMB/CIFS), ANR" },
  {
    label: "Network Protocols",
    value: [
      "IPv4/IPv6, ARP, TCP, UDP, RTCP, RTP, RTSP, HTTPS, DNS, DDNS, DHCP, FTP, NTP, SMTP, UPnP, Bonjour, SIP, SNMP, PPPoE, VLAN, 802.1x, QoS, IGMP, ICMP, SSL, TLS 1.2",
    ],
  },
];

export const audioSpecifications5 = [
  { label: "Audio Compression", value: "G.711/AAC/G.722/G.726" },
  { label: "Audio Sampling Rate", value: "8/16/32/48KHz" },
  { label: "Audio Bit Rate", value: "16~256kbps" },
  { label: "Two-way Audio", value: "Support" },
];

export const analyticSpecifications5 = [
  {
    label: "Video Analysis",
    value: [
      "Region Entrance, Region Exiting, Advanced Motion Detection, Tamper Detection, Line Crossing, Loitering, Object Left, Object Removed",
    ],
  },
  {
    label: "People Counting & Report",
    value: "Count the number of people entering or exiting",
  },
];

export const systemSpecifications5 = [
  {
    label: "Storage",
    value: "Support microSD/SDHC/SDXC Card Local Storage, up to 1TB",
  },
  {
    label: "Advanced Function",
    value: [
      "BLC, HLC, 2D DNR, 3D DNR, Defog, AWB, IP Address Filtering, AGC, Anti-flicker, Corridor Mode, Deblur",
    ],
  },
  { label: "SIP/VoIP Support", value: "Yes, Voice & Video-over-IP" },
  {
    label: "Event Trigger",
    value:
      "Motion Detection, Network Disconnection, External Input, Audio Alarm, etc.",
  },
  {
    label: "Event Action",
    value:
      "FTP Upload, SMTP Upload, SD Card Record, External Output, SIP Phone, HTTP Notification, etc.",
  },
  { label: "System Compatibility", value: "ONVIF Profile G & S & T, API" },
];

export const generalSpecifications5 = [
  { label: "Working Temperature", value: "-40℃∼60℃" },
  { label: "Working Humidity", value: "0∼90% (Non-condensing)" },
  {
    label: "Power Supply",
    value:
      "PoE (802.3af); PoE (802.3af) / DC 12V±10% (Multi-interface Version)",
  },
  { label: "Power Consumption", value: ["5.2W MAX", "6.4W MAX (With IR on)"] },
  {
    label: "Housing",
    value:
      "Up to IP67-rated for weather-resistant performance / Vandal-proof IK10-rated metal housing",
  },
  { label: "Weight", value: "780g" },
  { label: "Dimensions", value: "Φ130mmX115mm" },
  { label: "Warranty", value: "3/5 Years" },
];

export const cameraSpecifications6 = [
  { label: "Name", value: "4MP NDAA AI Motorized Dome Network Camera" },
  { label: "Image Sensor", value: '1/2.8" Progressive Scan CMOS' },
  {
    label: "Min. Illumination",
    value: "Color: 0.005Lux @F1.4, B/W: 0Lux with IR on",
  },
  { label: "WDR", value: "120dB Super WDR" },
  { label: "Shutter Time", value: "1/100000s∼1s" },
  { label: "Day/Night Mode", value: "Day/Night/Auto/Customize/Schedule" },
  { label: "IR Distance", value: "Up to 50m" },
  { label: "S/N", value: ">55dB" },
];

export const lensSpecifications6 = [
  { label: "Lens", value: "Motorized 2.7∼13.5mm/7∼22mm @F1.4" },
  {
    label: "Field of View",
    value: [
      "H97°~H28° / D110°~D32° / V55°~V16° (2.7~13.5mm)",
      "H39°~H16° / D45°~D20° / V22°~V9° (7~22mm)",
    ],
  },
  { label: "Mount", value: "Φ14" },
  { label: "Focus Control", value: "Auto/Manual" },
  { label: "Iris Control", value: "-" },
];

export const videoSpecifications6 = [
  { label: "Max. Image Resolution", value: "2688x1520" },
  {
    label: "Primary Stream",
    value: [
      "60Hz: 30fps@(2688x1520, 2304x1296, 1920x1080, 1280x720)",
      "50Hz: 25fps@(2688x1520, 2304x1296, 1920x1080, 1280x720)",
    ],
  },
  {
    label: "Secondary Stream",
    value: [
      "60Hz: 30fps@(1280x720, 704x576, 640x480)",
      "50Hz: 25fps@(1280x720, 704x576, 640x480)",
    ],
  },
  {
    label: "Tertiary Stream",
    value: [
      "60Hz: 30fps@(1280x720, 704x576, 640x480)",
      "50Hz: 25fps@(1280x720, 704x576, 640x480)",
    ],
  },
  {
    label: "Video Compression",
    value: "H.265+/H.265(HEVC)/H.264+/H.264/MJPEG",
  },
  { label: "Video Bit Rate", value: "16Kbps~16Mbps (CBR/VBR Adjustable)" },
  { label: "Privacy Masking", value: "Up to 4 areas" },
  { label: "ROI", value: "Up to 8 areas" },
  {
    label: "Image Settings",
    value: "Saturation/Brightness/Contrast/Sharpness",
  },
];

export const interfaceSpecifications6 = [
  { label: "Ethernet", value: "1*RJ45 10M/100M Ethernet Port" },
  {
    label: "Audio I/O",
    value: "Built-in Microphone; 1/1 (Multi-interface Version)",
  },
  { label: "Alarm I/O", value: "1/1 (Multi-interface Version)" },
];

export const networkSpecifications6 = [
  { label: "Network Storage", value: "NAS (Support NFS, SMB/CIFS), ANR" },
  {
    label: "Network Protocols",
    value: [
      "IPv4/IPv6, ARP, TCP, UDP, RTCP, RTP, RTSP, HTTPS, DNS, DDNS, DHCP, FTP, NTP, SMTP, UPnP, Bonjour, SIP, SNMP, PPPoE, VLAN, 802.1x, QoS, IGMP, ICMP, SSL, TLS 1.2",
    ],
  },
];

export const audioSpecifications6 = [
  { label: "Audio Compression", value: "G.711/AAC/G.722/G.726" },
  { label: "Audio Sampling Rate", value: "8/16/32/48KHz" },
  { label: "Audio Bit Rate", value: "16~256kbps" },
  { label: "Two-way Audio", value: "Support" },
];

export const analyticSpecifications6 = [
  {
    label: "Video Analysis",
    value: [
      "Region Entrance, Region Exiting, Advanced Motion Detection, Tamper Detection, Line Crossing, Loitering, Object Left, Object Removed",
    ],
  },
  {
    label: "People Counting & Report",
    value: "Count the number of people entering or exiting",
  },
];

export const systemSpecifications6 = [
  {
    label: "Storage",
    value: "Support microSD/SDHC/SDXC Card Local Storage, up to 1TB",
  },
  {
    label: "Advanced Function",
    value: [
      "BLC, HLC, 2D DNR, 3D DNR, Defog, AWB, IP Address Filtering, AGC, Anti-flicker, Corridor Mode, Deblur",
    ],
  },
  { label: "SIP/VoIP Support", value: "Yes, Voice & Video-over-IP" },
  {
    label: "Event Trigger",
    value:
      "Motion Detection, Network Disconnection, External Input, Audio Alarm, etc.",
  },
  {
    label: "Event Action",
    value:
      "FTP Upload, SMTP Upload, SD Card Record, External Output, SIP Phone, HTTP Notification, etc.",
  },
  { label: "System Compatibility", value: "ONVIF Profile G & S & T, API" },
];

export const generalSpecifications6 = [
  { label: "Working Temperature", value: "-40℃∼60℃" },
  { label: "Working Humidity", value: "0∼90% (Non-condensing)" },
  {
    label: "Power Supply",
    value:
      "PoE (802.3af); PoE (802.3af) / DC 12V±10% (Multi-interface Version)",
  },
  { label: "Power Consumption", value: ["5.5W MAX", "6.5W MAX (With IR on)"] },
  {
    label: "Housing",
    value:
      "Up to IP67-rated for weather-resistant performance / Vandal-proof IK10-rated metal housing",
  },
  { label: "Weight", value: "780g" },
  { label: "Dimensions", value: "Φ130mmX115mm" },
  { label: "Warranty", value: "3/5 Years" },
];

export const cameraSpecifications7 = [
  { label: "Name", value: "5MP NDAA AI Motorized Dome Network Camera" },
  { label: "Image Sensor", value: '1/2.8" Progressive Scan CMOS' },
  {
    label: "Min. Illumination",
    value: "Color: 0.008Lux @F1.4, B/W: 0Lux with IR on",
  },
  { label: "WDR", value: "120dB Super WDR" },
  { label: "Shutter Time", value: "1/100000s∼1s" },
  { label: "Day/Night Mode", value: "Day/Night/Auto/Customize/Schedule" },
  { label: "IR Distance", value: "Up to 50m" },
  { label: "S/N", value: ">55dB" },
];

export const lensSpecifications7 = [
  { label: "Lens", value: "Motorized 2.7∼13.5mm/7∼22mm @F1.4" },
  {
    label: "Field of View",
    value: [
      "H94°~H31° / D120°~D38° / V68°~V23° (2.7∼13.5mm)",
      "H37°∼H15° / D46°∼D19° / V28°∼V11° (7∼22mm)",
    ],
  },
  { label: "Mount", value: "Φ14" },
  { label: "Focus Control", value: "Auto/Manual" },
  { label: "Iris Control", value: "-" },
];

export const videoSpecifications7 = [
  { label: "Max. Image Resolution", value: "2592x1944" },
  {
    label: "Primary Stream",
    value: [
      "60Hz: 30fps@(2592x1944, 2048x1536, 1920x1080, 1280x960, 1280x720, 704x576)",
      "50Hz: 25fps@(2592x1944, 2048x1536, 1920x1080, 1280x960, 1280x720, 704x576)",
    ],
  },
  {
    label: "Secondary Stream",
    value: [
      "60Hz: 30fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
      "50Hz: 25fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
    ],
  },
  {
    label: "Tertiary Stream",
    value: [
      "60Hz: 30fps@(1280x720, 704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
      "50Hz: 25fps@(1280x720, 704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
    ],
  },
  {
    label: "Video Compression",
    value: "H.265+/H.265(HEVC)/H.264+/H.264/MJPEG",
  },
  { label: "Video Bit Rate", value: "16Kbps∼16Mbps (CBR/VBR Adjustable)" },
  { label: "Privacy Masking", value: "Up to 4 areas" },
  { label: "ROI", value: "Up to 8 areas" },
  {
    label: "Image Settings",
    value: "Saturation/Brightness/Contrast/Sharpness",
  },
];

export const interfaceSpecifications7 = [
  { label: "Ethernet", value: "1*RJ45 10M/100M Ethernet Port" },
  {
    label: "Audio I/O",
    value: "Built-in Microphone; 1/1 (Multi-interface Version)",
  },
  { label: "Alarm I/O", value: "1/1 (Multi-interface Version)" },
];

export const networkSpecifications7 = [
  { label: "Network Storage", value: "NAS (Support NFS, SMB/CIFS), ANR" },
  {
    label: "Network Protocols",
    value: [
      "IPv4/IPv6, ARP, TCP, UDP, RTCP, RTP, RTSP, HTTP, HTTPS, DNS, DDNS, DHCP, FTP, NTP, SMTP, UPnP, Bonjour, SIP, SNMP, PPPoE, VLAN, 802.1x, QoS, IGMP, ICMP, SSL, TLS 1.2",
    ],
  },
];

export const analyticSpecifications7 = [
  {
    label: "Video Analysis",
    value: [
      "Region Entrance, Region Exiting, Advanced Motion Detection, Tamper Detection, Line Crossing, Loitering, Object Left, Object Removed",
    ],
  },
  {
    label: "People Counting & Report",
    value: "Count the number of people entering or exiting",
  },
];

export const audioSpecifications7 = [
  { label: "Audio Compression", value: "G.711/AAC/G.722/G.726" },
  { label: "Audio Sampling Rate", value: "8/16/32/48KHz" },
  { label: "Audio Bit Rate", value: "16~256kbps" },
  { label: "Two-way Audio", value: "Support" },
];

export const systemSpecifications7 = [
  {
    label: "Storage",
    value: "Support microSD/SDHC/SDXC Card Local Storage, up to 1TB",
  },
  {
    label: "Advanced Function",
    value: [
      "BLC, HLC, 2D DNR, 3D DNR, Defog, AWB, IP Address Filtering, AGC, Anti-flicker, Corridor Mode, Deblur",
    ],
  },
  { label: "SIP/VoIP Support", value: "Yes, Voice & Video-over-IP" },
  {
    label: "Event Trigger",
    value:
      "Motion Detection, Network Disconnection, External Input, Audio Alarm, etc.",
  },
  {
    label: "Event Action",
    value:
      "FTP Upload, SMTP Upload, SD Card Record, External Output, SIP Phone, HTTP Notification, etc.",
  },
  { label: "System Compatibility", value: "ONVIF Profile G & S & T, API" },
];

export const generalSpecifications7 = [
  { label: "Working Temperature", value: "-40℃∼60℃" },
  { label: "Working Humidity", value: "0∼90% (Non-condensing)" },
  {
    label: "Power Supply",
    value:
      "PoE (802.3af); PoE (802.3af) / DC 12V±10% (Multi-interface Version)",
  },
  { label: "Power Consumption", value: ["5.5W MAX", "6.5W MAX (With IR on)"] },
  {
    label: "Housing",
    value:
      "Up to IP67-rated for weather-resistant performance / Vandal-proof IK10-rated metal housing",
  },
  { label: "Weight", value: "780g" },
  { label: "Dimensions", value: "Φ130mmX115mm" },
  { label: "Warranty", value: "3/5 Years" },
];

export const cameraSpecifications8 = [
  { label: "Name", value: "4K NDAA AI Motorized Dome Network Camera" },
  { label: "Image Sensor", value: '1/2.8" Progressive Scan CMOS' },
  {
    label: "Min. Illumination",
    value: "Color: 0.012Lux @F1.4, B/W: 0Lux with IR on",
  },
  { label: "WDR", value: "120dB Super WDR" },
  { label: "Shutter Time", value: "1/100000s∼1s" },
  { label: "Day/Night Mode", value: "Day/Night/Auto/Customize/Schedule" },
  { label: "IR Distance", value: "Up to 50m" },
  { label: "S/N", value: ">55dB" },
];

export const lensSpecifications8 = [
  { label: "Lens", value: "Motorized 2.7∼13.5mm @F1.4" },
  { label: "Field of View", value: "H110°~H29° / D129°~D33° / V59°~V16°" },
  { label: "Mount", value: "Φ14" },
  { label: "Focus Control", value: "Auto/Manual" },
  { label: "Iris Control", value: "-" },
];

export const videoSpecifications8 = [
  { label: "Max. Image Resolution", value: "3840x2160" },
  {
    label: "Primary Stream",
    value: [
      "60Hz/50Hz: 30fps@(3840x2160, 3072x2048, 2592x1944, 2592x1520, 2048x1536, 1920x1080, 1280x960, 1280x720, 704x576)",
      "20fps(3840x2160) (Optional for S Series)",
    ],
  },
  {
    label: "Secondary Stream",
    value: [
      "60Hz: 30fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
      "50Hz: 25fps@(704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
    ],
  },
  {
    label: "Tertiary Stream",
    value: [
      "60Hz: 30fps@(1280x720, 704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
      "50Hz: 25fps@(1280x720, 704x576, 640x480, 640x360, 352x288, 320x240, 320x192)",
    ],
  },
  {
    label: "Video Compression",
    value: "H.265+/H.265(HEVC)/H.264+/H.264/MJPEG",
  },
  { label: "Video Bit Rate", value: "16Kbps∼16Mbps (CBR/VBR Adjustable)" },
  { label: "Privacy Masking", value: "Up to 4 areas" },
  { label: "ROI", value: "Up to 8 areas" },
  {
    label: "Image Settings",
    value: "Saturation/Brightness/Contrast/Sharpness",
  },
];

export const interfaceSpecifications8 = [
  { label: "Ethernet", value: "1*RJ45 10M/100M Ethernet Port" },
  {
    label: "Audio I/O",
    value: "Built-in Microphone; 1/1 (Multi-interface Version)",
  },
  { label: "Alarm I/O", value: "1/1 (Multi-interface Version)" },
];

export const networkSpecifications8 = [
  { label: "Network Storage", value: "NAS (Support NFS, SMB/CIFS), ANR" },
  {
    label: "Network Protocols",
    value: [
      "IPv4/IPv6, ARP, TCP, UDP, RTCP, RTP, RTSP, HTTP, HTTPS, DNS, DDNS, DHCP, FTP, NTP, SMTP, UPnP, Bonjour, SIP, SNMP, PPPoE, VLAN, 802.1x, QoS, IGMP, ICMP, SSL, TLS 1.2",
    ],
  },
];

export const audioSpecifications8 = [
  { label: "Audio Compression", value: "G.711/AAC/G.722/G.726" },
  { label: "Audio Sampling Rate", value: "8/16/32/48KHz" },
  { label: "Audio Bit Rate", value: "16~256kbps" },
  { label: "Two-way Audio", value: "Support" },
];

export const analyticSpecifications8 = [
  {
    label: "Video Analysis",
    value: [
      "Region Entrance, Region Exiting, Advanced Motion Detection, Tamper Detection, Line Crossing, Loitering, Object Left, Object Removed",
    ],
  },
  {
    label: "People Counting & Report",
    value: "Count the number of people entering or exiting",
  },
];

export const systemSpecifications8 = [
  {
    label: "Storage",
    value: "Support microSD/SDHC/SDXC Card Local Storage, up to 1TB",
  },
  {
    label: "Advanced Function",
    value: [
      "BLC, HLC, 2D DNR, 3D DNR, Defog, AWB, IP Address Filtering, AGC, Anti-flicker, Corridor Mode, Deblur",
    ],
  },
  { label: "SIP/VoIP Support", value: "Yes, Voice & Video-over-IP" },
  {
    label: "Event Trigger",
    value:
      "Motion Detection, Network Disconnection, External Input, Audio Alarm, etc.",
  },
  {
    label: "Event Action",
    value:
      "FTP Upload, SMTP Upload, SD Card Record, External Output, SIP Phone, HTTP Notification, etc.",
  },
  { label: "System Compatibility", value: "ONVIF Profile G & S & T, API" },
];

export const generalSpecifications8 = [
  { label: "Working Temperature", value: "-40℃∼60℃" },
  { label: "Working Humidity", value: "0∼90% (Non-condensing)" },
  {
    label: "Power Supply",
    value:
      "PoE (802.3af); PoE (802.3af) / DC 12V±10% (Multi-interface Version)",
  },
  { label: "Power Consumption", value: ["7.4W MAX", "8.4W MAX (With IR on)"] },
  {
    label: "Housing",
    value:
      "Up to IP67-rated for weather-resistant performance / Vandal-proof IK10-rated metal housing",
  },
  { label: "Weight", value: "780g" },
  { label: "Dimensions", value: "Φ130mmX115mm" },
  { label: "Warranty", value: "3/5 Years" },
];
