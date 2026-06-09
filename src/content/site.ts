export type SiteLocale = "en" | "zh";

export const siteContent = {
  en: {
    nav: [
      ["Products", "#products"],
      ["Technical Capabilities", "#capabilities"],
      ["Markets", "#markets"],
      ["Process", "#process"],
      ["About", "#about"],
      ["RFQ", "#rfq"],
    ],
    languageLabel: "中文",
    languageHref: "/zh",
    hero: {
      title:
        "Electrical Equipment Supply, Coordinated with Engineering Discipline.",
      text:
        "We connect Canadian and U.S. projects with selected Chinese manufacturers. Technical review, documentation assessment, and practical coordination help keep each opportunity grounded in real project requirements.",
      primary: "Submit an RFQ",
      secondary: "View Product Scope",
      points: [
        ["Canada & U.S.", "Project context"],
        ["Engineering Review", "Documents and ratings"],
        ["Clear Coordination", "RFQ through delivery"],
      ],
    },
    products: {
      label: "Product Portfolio",
      title: "Core Electrical Equipment",
      text:
        "Initial focus is placed on equipment categories where technical scope, documentation quality, and the likely approval pathway can be reviewed before quotation.",
      items: [
        {
          title: "Transformers",
          subtitle: "Project-based supply coordination",
          details: [
            "Dry-type and oil-immersed applications",
            "Low- and medium-voltage requirements",
            "kVA, impedance, taps, enclosure, and accessories",
            "Project specification and installation review",
          ],
        },
        {
          title: "Switchgear",
          subtitle: "Low- and medium-voltage assemblies",
          details: [
            "Switchboards, switchgear, MCCs, and distribution equipment",
            "Protection, metering, and communication requirements",
            "Single-line diagram and equipment schedule review",
            "Documentation and compliance-path coordination",
          ],
        },
        {
          title: "Control Panels",
          subtitle: "Industrial control and automation enclosures",
          details: [
            "PLC, relay, terminal, VFD, and monitoring panels",
            "Schematics, BOMs, terminal plans, and PLC I/O",
            "Component availability and substitution review",
            "FAT and shipment-document coordination",
          ],
        },
      ],
    },
    capabilities: {
      label: "Technical Capabilities",
      title:
        "Built around the documents and decisions that move a project forward.",
      text:
        "The review is not a substitute for the engineer of record or certification body. It is a practical early-stage check that helps identify missing information, mismatched expectations, and avoidable coordination risk.",
      items: [
        ["Specification & Datasheet Review", "Ratings, options, application fit, and required deliverables."],
        ["Single-Line Diagrams & Schematics", "Electrical architecture, control logic context, and interfaces."],
        ["BOM & Component Review", "Completeness, device references, and potential substitutions."],
        ["Terminal Schedules, Wire Tags & PLC I/O", "Connection clarity and maintainable field documentation."],
        ["Compliance Path Coordination", "Likely CSA, cUL, cETL, NRTL, or field-evaluation route."],
        ["FAT & Shipment Documentation", "Test records, drawings, manuals, packing lists, and spares."],
      ],
      visualTitle: "Typical Review Package",
      visualItems: [
        "Equipment specification",
        "Single-line diagram",
        "Schematics and BOM",
        "Layout and terminal plan",
        "Required approval path",
        "Target delivery date",
      ],
    },
    markets: {
      label: "Target Markets",
      title: "Supporting projects across North America.",
      text:
        "iSparkYou is positioned for project-based electrical equipment supply and technical coordination, with bilingual communication between North American customers and selected manufacturers in China.",
      items: [
        ["Canada", "Industrial, commercial, infrastructure, retrofit, and OEM opportunities."],
        ["United States", "Project-specific supply opportunities where requirements and responsibility boundaries are defined."],
        ["Industrial & Commercial", "Manufacturing, utilities support, buildings, process equipment, and system integrators."],
      ],
    },
    process: {
      label: "Project Process",
      title: "A clear workflow from RFQ to delivery.",
      items: [
        ["01", "Define", "Share the project scope, equipment ratings, available documents, and target date."],
        ["02", "Review", "Clarify technical requirements, missing information, and the likely approval pathway."],
        ["03", "Coordinate", "Align manufacturer documents, commercial scope, revisions, and delivery expectations."],
        ["04", "Deliver", "Coordinate final documents, shipment readiness, logistics information, and follow-up."],
      ],
    },
    about: {
      label: "About iSparkYou",
      title: "Engineering perspective. Practical coordination.",
      founder: "Senye Zhang, Founder",
      text:
        "iSparkYou provides electrical equipment sourcing and technical coordination for projects in Canada and the United States. The approach is built around documentation discipline, real installation context, maintainability, and clear communication throughout the project lifecycle.",
      items: [
        "Electrical equipment sourcing from selected manufacturers",
        "Datasheet, schematic, BOM, and technical-document review",
        "Bilingual manufacturer communication in English and Chinese",
        "Field installation and maintainability considerations",
      ],
    },
    rfq: {
      label: "Request a Quotation",
      title: "Start with the project facts.",
      text:
        "Send the information currently available. A complete package is helpful, but an early RFQ can begin with the equipment category, ratings, application, project location, and target date.",
      documentsTitle: "Helpful Documents",
      documents: [
        "Equipment specifications or datasheets",
        "Single-line diagrams",
        "Control schematics",
        "Bill of materials",
        "Layout or terminal drawings",
        "Required delivery date",
      ],
    },
    boundary: {
      title: "Responsibility Boundary",
      text:
        "Final product certification, code compliance, installation, engineering approval, and acceptance by the authority having jurisdiction remain the responsibility of the applicable qualified parties, including the manufacturer, certification body, engineer of record, licensed electrical contractor, and AHJ.",
    },
    footer: {
      text:
        "Electrical equipment supply and technical coordination for projects in Canada and the United States.",
      legal:
        "Product availability, commercial terms, certification route, and delivery schedule are confirmed only in the project-specific quotation and supporting documents.",
      privacy: "Privacy",
    },
  },
  zh: {
    nav: [
      ["产品范围", "#products"],
      ["技术能力", "#capabilities"],
      ["目标市场", "#markets"],
      ["项目流程", "#process"],
      ["关于我们", "#about"],
      ["询价", "#rfq"],
    ],
    languageLabel: "English",
    languageHref: "/",
    hero: {
      title: "电气设备供应，以工程化方法协调项目全过程。",
      text:
        "我们为加拿大和美国项目对接经筛选的中国制造商，并通过技术审查、文件评估和务实协调，让每个机会建立在真实、清晰的项目需求之上。",
      primary: "提交询价",
      secondary: "查看产品范围",
      points: [
        ["加拿大与美国", "项目环境"],
        ["工程审查", "文件与参数"],
        ["清晰协调", "从询价到交付"],
      ],
    },
    products: {
      label: "产品范围",
      title: "核心电气设备",
      text:
        "初期重点聚焦于能够在报价前明确技术范围、文件质量和潜在合规路径的设备类别。",
      items: [
        {
          title: "变压器",
          subtitle: "基于具体项目的供应协调",
          details: [
            "干式及油浸式应用",
            "低压及中压项目需求",
            "容量、阻抗、分接、外壳及附件",
            "项目规格和安装环境审查",
          ],
        },
        {
          title: "开关设备",
          subtitle: "低压及中压成套设备",
          details: [
            "配电柜、开关柜、MCC及配电设备",
            "保护、计量和通信要求",
            "单线图及设备表审查",
            "技术文件及合规路径协调",
          ],
        },
        {
          title: "控制柜",
          subtitle: "工业控制与自动化箱柜",
          details: [
            "PLC、继电器、端子、VFD及监测柜",
            "原理图、BOM、端子表和PLC I/O",
            "元件可用性及替代方案审查",
            "FAT及发运文件协调",
          ],
        },
      ],
    },
    capabilities: {
      label: "技术能力",
      title: "围绕推动项目落地所需的文件和关键决策开展工作。",
      text:
        "我们的审查不能替代项目签字工程师或认证机构，而是在项目前期识别缺失信息、需求偏差和可避免的协调风险。",
      items: [
        ["规格书与数据表审查", "设备参数、选项、应用匹配及交付文件。"],
        ["单线图与控制原理图", "电气架构、控制逻辑背景和系统接口。"],
        ["BOM与元件审查", "完整性、器件引用及潜在替代方案。"],
        ["端子表、线号与PLC I/O", "接线清晰度及现场可维护性。"],
        ["合规路径协调", "CSA、cUL、cETL、NRTL或现场评估的潜在路径。"],
        ["FAT与发运文件", "测试记录、图纸、手册、装箱单及备件。"],
      ],
      visualTitle: "典型审查资料",
      visualItems: [
        "设备规格书",
        "单线图",
        "原理图与BOM",
        "布局及端子图",
        "所需合规路径",
        "目标交付日期",
      ],
    },
    markets: {
      label: "目标市场",
      title: "服务北美项目。",
      text:
        "iSparkYou面向项目型电气设备供应和技术协调，通过中英文沟通连接北美客户与经筛选的中国制造商。",
      items: [
        ["加拿大", "工业、商业、基础设施、改造及OEM项目机会。"],
        ["美国", "技术要求和责任边界明确的项目型供应机会。"],
        ["工业与商业", "制造业、公用设施配套、建筑、工艺设备及系统集成商。"],
      ],
    },
    process: {
      label: "项目流程",
      title: "从询价到交付的清晰流程。",
      items: [
        ["01", "定义需求", "提供项目范围、设备参数、已有文件和目标日期。"],
        ["02", "技术审查", "澄清技术要求、缺失信息及潜在合规路径。"],
        ["03", "协调确认", "协调制造商文件、商务范围、版本修改和交付预期。"],
        ["04", "交付跟进", "协调最终文件、发运准备、物流信息和项目跟进。"],
      ],
    },
    about: {
      label: "关于 iSparkYou",
      title: "工程视角，务实协调。",
      founder: "Senye Zhang，创始人",
      text:
        "iSparkYou为加拿大和美国项目提供电气设备采购及技术协调服务。我们的工作建立在规范的技术文件、真实安装环境、可维护性和清晰项目沟通之上。",
      items: [
        "对接经筛选制造商的电气设备供应",
        "数据表、原理图、BOM及技术文件审查",
        "中英文制造商沟通",
        "现场安装和可维护性考虑",
      ],
    },
    rfq: {
      label: "提交询价",
      title: "从真实项目资料开始。",
      text:
        "请发送目前已有的信息。完整资料有助于提高效率，但前期询价可先提供设备类别、额定参数、应用场景、项目地点和目标日期。",
      documentsTitle: "建议提供的文件",
      documents: [
        "设备规格书或数据表",
        "单线图",
        "控制原理图",
        "物料清单（BOM）",
        "布局图或端子图",
        "要求交付日期",
      ],
    },
    boundary: {
      title: "责任边界",
      text:
        "最终产品认证、法规符合性、安装、工程审批及主管机构验收，仍由项目相关的合资格责任方承担，包括制造商、认证机构、项目签字工程师、持证电气承包商及主管机构（AHJ）。",
    },
    footer: {
      text: "为加拿大和美国项目提供电气设备供应与技术协调。",
      legal:
        "产品可用性、商务条款、认证路径和交付计划仅以具体项目报价及支持文件中的最终确认为准。",
      privacy: "隐私政策",
    },
  },
} as const;

