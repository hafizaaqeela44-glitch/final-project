/* ============================================
   THE BEAD MARKET - Products Data
   ============================================ */

const productsData = [
    {
        id: "1-crystal-bloom-accent-charm",
        name: "Crystal Bloom Accent Charm",
        category: "Charms",
        price: 60,
        oldPrice: 90,
        sku: "TBM-CHM-001",
        rating: 4.5,
        reviewCount: 18,
        tags: ["charm", "crystal", "bloom", "flower", "rose", "gold", "silver", "black", "enamel"],
        shortDescription: "A floral crystal accent charm with a raised rose design in silver or gold tones on a black enamel base.",
        description: "The Crystal Bloom Accent Charm features a raised rose design in silver or gold tones, set against a sleek black enamel base. Encircled by a ring of sparkling crystals, it adds a sophisticated floral touch to charm bracelets, necklaces, handbags, and custom craft projects.",
        images: [
            "images/Crystal Bloom Accent Charm/1.jpeg",
            "images/Crystal Bloom Accent Charm/2.jpeg"
        ],
        relatedIds: ["1-piece-golden-petal-bloom-charm", "1-piece-magnet-golden-heart-charm", "1-piece-magnet-heart-silver-charm", "2-color-wing-magnet-butterfly-charm", "doraemon-face-charm", "cute-panda-resin-charm-6pcs", "12mm-alloy-crown-charms"],
        additionalInfo: {
            "Design": "Floral Bloom",
            "Finish": "Gold/Silver Tone",
            "Base Color": "Black",
            "Detail": "Crystal Accents",
            "Type": "Jewelry Charm"
        }
    },
    {
        id: "1-piece-golden-petal-bloom-charm",
        name: "Golden Petal Bloom Charm",
        category: "Charms",
        price: 60,
        oldPrice: 130,
        sku: "TBM-CHM-002",
        rating: 4.3,
        reviewCount: 34,
        tags: ["charm", "golden", "petal", "bloom", "flower", "white enamel", "DIY"],
        shortDescription: "A golden floral bloom charm with a smooth white enamel fill for jewelry and DIY accessories.",
        description: "The Golden Petal Bloom Charm features an abstract flower design outlined in radiant gold with a smooth white enamel fill. Its organic, flowing shape adds modern artistic flair to charm bracelets, necklaces, handbags, and DIY accessories.",
        images: [
            "images/Golden Petal Bloom Charm/1.jpeg",
            "images/Golden Petal Bloom Charm/2.jpeg"
        ],
        relatedIds: ["1-crystal-bloom-accent-charm", "1-piece-magnet-golden-heart-charm", "1-piece-magnet-heart-silver-charm", "2-color-wing-magnet-butterfly-charm", "12mm-alloy-crown-charms", "doraemon-face-charm"],
        additionalInfo: {
            "Design": "Petal Bloom",
            "Color": "Gold and White",
            "Finish": "Golden Tone",
            "Detail": "Enamel Fill",
            "Type": "Jewelry Charm"
        }
    },
    {
        id: "1-piece-magnet-golden-heart-charm",
        name: "Magnet Golden Heart Charm",
        category: "Charms",
        price: 50,
        oldPrice: 150,
        sku: "TBM-CHM-003",
        rating: 4.5,
        reviewCount: 43,
        tags: ["charm", "heart", "golden", "magnet", "romantic", "jewelry", "keychain"],
        shortDescription: "A simple golden heart charm suitable for bracelets, necklaces, and keychains.",
        description: "This Golden Heart Charm adds a touch of golden love to jewelry and accessories. The simple heart design is suitable for bracelets, necklaces, or keychains and provides a sweet romantic accent.",
        images: [
            "images/Magnet Golden Heart Charm/1.jpeg",
            "images/Magnet Golden Heart Charm/2.jpeg"
        ],
        relatedIds: ["1-piece-magnet-heart-silver-charm", "1-piece-golden-petal-bloom-charm", "1-crystal-bloom-accent-charm", "2-color-wing-magnet-butterfly-charm", "12mm-alloy-crown-charms"],
        additionalInfo: {
            "Design": "Heart",
            "Color": "Golden",
            "Type": "Magnetic Charm",
            "Use": "Bracelets, Necklaces and Keychains"
        }
    },
    {
        id: "1-piece-magnet-heart-silver-charm",
        name: "Magnet Heart Silver Charm",
        category: "Charms",
        price: 50,
        oldPrice: 150,
        sku: "TBM-CHM-004",
        rating: 4.3,
        reviewCount: 12,
        tags: ["charm", "heart", "silver", "magnet", "romantic", "jewelry", "keychain"],
        shortDescription: "A simple silver heart charm suitable for bracelets, necklaces, and keychains.",
        description: "This Silver Heart Charm adds a touch of silver love to jewelry and accessories. The simple heart design is suitable for bracelets, necklaces, or keychains and provides a sweet romantic accent.",
        images: [
            "images/Magnet Heart Silver Charm/1.jpeg",
            "images/Magnet Heart Silver Charm/2.jpeg"
        ],
        relatedIds: ["1-piece-magnet-golden-heart-charm", "1-piece-golden-petal-bloom-charm", "1-crystal-bloom-accent-charm", "2-color-wing-magnet-butterfly-charm", "12mm-alloy-crown-charms"],
        additionalInfo: {
            "Design": "Heart",
            "Color": "Silver",
            "Type": "Magnetic Charm",
            "Use": "Bracelets, Necklaces and Keychains"
        }
    },
    {
        id: "12mm-alloy-crown-charms",
        name: "12mm Alloy Crown Charms",
        category: "Charms",
        price: 150,
        oldPrice: 180,
        sku: "TBM-CHM-005",
        rating: 4.5,
        reviewCount: 45,
        tags: ["crown", "charm", "alloy", "12mm", "colorful", "pendant", "DIY jewelry", "zinc alloy"],
        shortDescription: "12mm alloy crown charms for necklaces, bracelets, earrings, and DIY jewelry projects.",
        description: "12mm Alloy Crown Charms are colorful fashion pendants intended for DIY jewelry making, including necklaces, bracelets, earrings, and other crafting projects.",
        images: [
            "images/12mm Alloy Crown Charms/1.webp"
        ],
        relatedIds: ["1-crystal-bloom-accent-charm", "1-piece-golden-petal-bloom-charm", "1-piece-magnet-golden-heart-charm", "1-piece-magnet-heart-silver-charm", "2-color-wing-magnet-butterfly-charm", "crafting-jump-rings", "crystal-tec-wire"],
        additionalInfo: {
            "Material": "Zinc Alloy",
            "Size": "12mm",
            "Design": "Crown",
            "Enamel": "No",
            "Type": "Pendant Charm",
            "Use": "Necklaces, Bracelets and Earrings"
        }
    },
    {
        id: "2-color-wing-magnet-butterfly-charm",
        name: "2 Color Wing Magnet Butterfly Charm",
        category: "Charms",
        price: 149,
        oldPrice: 300,
        sku: "TBM-CHM-006",
        rating: 4.6,
        reviewCount: 21,
        tags: ["butterfly", "charm", "magnet", "wing", "two-color", "jewelry", "DIY"],
        shortDescription: "A two-color wing butterfly magnet charm for jewelry and craft projects.",
        description: "The 2 Color Wing Magnet Butterfly Charm is a decorative butterfly-themed charm with two-color wings and a magnetic design, suitable for jewelry and DIY craft applications.",
        images: [
            "images/2 Color Wing Magnet Butterfly Charm/1.jpg",
            "images/2 Color Wing Magnet Butterfly Charm/2.jpg"
        ],
        relatedIds: ["1-crystal-bloom-accent-charm", "1-piece-golden-petal-bloom-charm", "1-piece-magnet-golden-heart-charm", "1-piece-magnet-heart-silver-charm", "cute-panda-resin-charm-6pcs", "doraemon-face-charm", "12mm-alloy-crown-charms"],
        additionalInfo: {
            "Design": "Butterfly",
            "Detail": "Two-Color Wings",
            "Type": "Magnetic Charm",
            "Use": "Jewelry Making and DIY Crafts"
        }
    },
    {
        id: "24-grid-organizer-box",
        name: "24-Grid Organizer Box",
        category: "Storage Boxes",
        price: 1450,
        oldPrice: 2000,
        sku: "TBM-STB-001",
        rating: 4.5,
        reviewCount: 12,
        tags: ["storage box", "organizer", "24-grid", "clear plastic", "beads", "jewelry supplies", "crafts"],
        shortDescription: "A clear plastic organizer with 24 individual compartments for beads, jewelry supplies, crafts, hardware, and small items.",
        description: "This clear plastic organizer box features 24 individual compartments, making it suitable for storing jewelry supplies, beads, crafts, hardware, and other small items. Its clear construction provides visibility while the compartmentalized design keeps items organized.",
        images: [
            "images/24-Grid Organizer Box/1.jpeg",
            "images/24-Grid Organizer Box/2.jpeg",
            "images/24-Grid Organizer Box/3.jpeg"
        ],
        relatedIds: ["1pc-clear-plastic-jewelry-organizer-box-28-grid", "crystal-beads-6mm", "double-tone-glass-beads-100-pieces", "drop-shaped-glass-beads-8mm", "crafting-jump-rings", "crystal-tec-wire"],
        additionalInfo: {
            "Material": "Clear Plastic",
            "Compartments": "24",
            "Type": "Organizer Box",
            "Use": "Beads, Jewelry Supplies and Craft Accessories"
        }
    },
    {
        id: "1pc-clear-plastic-jewelry-organizer-box-28-grid",
        name: "28-Grid Jewelry Organizer Box",
        category: "Storage Boxes",
        price: 549,
        oldPrice: 649,
        sku: "TBM-STB-002",
        rating: 4.3,
        reviewCount: 45,
        tags: ["storage box", "organizer", "28-grid", "clear plastic", "jewelry", "earrings", "beads", "crafts"],
        shortDescription: "A clear plastic 28-grid rectangular organizer for jewelry, earrings, beads, crafts, and small accessories.",
        description: "A 1-piece clear plastic jewelry organizer box with 28 grids in a rectangular storage-case format. It is designed for multipurpose storage and display of earrings, beads, jewelry supplies, and craft accessories.",
        images: [
            "images/28-Grid Jewelry Organizer Box/1.webp",
            "images/28-Grid Jewelry Organizer Box/2.webp",
            "images/28-Grid Jewelry Organizer Box/3.webp"
        ],
        relatedIds: ["24-grid-organizer-box", "crystal-beads-6mm", "double-tone-glass-beads-100-pieces", "drop-shaped-glass-beads-8mm", "crafting-jump-rings", "crystal-tec-wire"],
        additionalInfo: {
            "Material": "Clear Plastic",
            "Compartments": "28",
            "Shape": "Rectangular",
            "Quantity": "1 Piece",
            "Type": "Organizer Box",
            "Use": "Earrings, Beads and Craft Supplies"
        }
    },
    {
        id: "crafting-jump-rings",
        name: "Crafting Jump Rings",
        category: "Beads",
        price: 99,
        oldPrice: 110,
        sku: "TBM-JMT-001",
        rating: 4.5,
        reviewCount: 22,
        tags: ["jump rings", "jewelry making", "crafting", "gold", "silver", "findings"],
        shortDescription: "Versatile jump rings available in gold and silver finishes for jewelry making and crafting.",
        description: "These versatile jump rings are a must-have for jewelry making and crafting. They are available in classic gold and silver finishes and are designed to provide secure and easy connections for jewelry designs.",
        images: [
            "images/Crafting Jump Rings/1.jpeg",
            "images/Crafting Jump Rings/2.jpeg",
            "images/Crafting Jump Rings/3.jpeg"
        ],
        relatedIds: ["crystal-tec-wire", "crystal-beads-6mm", "drop-shaped-glass-beads-8mm", "double-tone-glass-beads-100-pieces", "12mm-alloy-crown-charms", "diy-handmade-pliers-1-golden-ring"],
        additionalInfo: {
            "Type": "Jump Rings",
            "Finish": "Gold and Silver",
            "Use": "Jewelry Making and Crafting"
        }
    },
    {
        id: "crystal-tec-wire",
        name: "Crystal Tec Wire",
        category: "Beads",
        price: 220,
        oldPrice: 350,
        sku: "TBM-JMT-002",
        rating: 4.6,
        reviewCount: 22,
        tags: ["crystal tec", "wire", "elastic wire", "jewelry making", "beading", "string"],
        shortDescription: "Crystal Tec wire for jewelry making and beading applications.",
        description: "Crystal Tec wire is a flexible jewelry-making wire/string product intended for beading and craft applications.",
        images: [
            "images/Crystal Tec Wire/1.jpeg",
            "images/Crystal Tec Wire/2.jpeg",
            "images/Crystal Tec Wire/3.jpeg"
        ],
        relatedIds: ["crafting-jump-rings", "crystal-beads-6mm", "drop-shaped-glass-beads-8mm", "double-tone-glass-beads-100-pieces", "diy-handmade-pliers-1-golden-ring"],
        additionalInfo: {
            "Type": "Jewelry Making Wire",
            "Flexibility": "Flexible",
            "Use": "Beading and Jewelry Making"
        }
    },
    {
        id: "crystal-beads-6mm",
        name: "Crystal Beads 6mm",
        category: "Beads",
        price: 89,
        oldPrice: 100,
        sku: "TBM-BEA-001",
        rating: 4.3,
        reviewCount: 12,
        tags: ["crystal beads", "6mm", "beads", "jewelry making", "glass", "beading"],
        shortDescription: "6mm crystal beads for jewelry-making and craft projects.",
        description: "Crystal Beads 6mm are offered for jewelry-making and craft use. The product page identifies the beads as 6mm crystal beads.",
        images: [
            "images/Crystal Beads 6mm/1.jpeg",
            "images/Crystal Beads 6mm/2.jpeg"
        ],
        relatedIds: ["double-tone-glass-beads-100-pieces", "drop-shaped-glass-beads-8mm", "crystal-tec-wire", "crafting-jump-rings", "24-grid-organizer-box", "1pc-clear-plastic-jewelry-organizer-box-28-grid"],
        additionalInfo: {
            "Type": "Crystal Beads",
            "Bead Size": "6mm",
            "Use": "Jewelry Making and Crafting"
        }
    },
    {
        id: "cute-panda-resin-charm-6pcs",
        name: "Cute Panda Resin Charm",
        category: "Charms",
        price: 60,
        oldPrice: 85,
        sku: "TBM-CHM-007",
        rating: 4.5,
        reviewCount: 45,
        tags: ["panda", "resin charm", "6pcs", "cute", "animal", "DIY jewelry", "crafts"],
        shortDescription: "A set of six cute panda resin charms for DIY jewelry and craft projects.",
        description: "Cute Panda Resin Charm (6pcs) is a set of six panda-themed resin charms intended for DIY jewelry and craft projects.",
        images: [
            "images/Cute Panda Resin Charm/1.jpeg"
        ],
        relatedIds: ["doraemon-face-charm", "2-color-wing-magnet-butterfly-charm", "1-crystal-bloom-accent-charm", "1-piece-golden-petal-bloom-charm", "12mm-alloy-crown-charms"],
        additionalInfo: {
            "Material": "Resin",
            "Design": "Panda",
            "Quantity": "6 Pieces",
            "Type": "Jewelry Charm",
            "Use": "DIY Jewelry and Crafts"
        }
    },
    {
        id: "doraemon-face-charm",
        name: "Doraemon Face Charm",
        category: "Charms",
        price: 30,
        oldPrice: 100,
        sku: "TBM-CHM-008",
        rating: 4.6,
        reviewCount: 12,
        tags: ["Doraemon", "face charm", "enamel", "charm", "DIY jewelry", "crafts", "lightweight"],
        shortDescription: "A lightweight and durable Doraemon face charm with an enamel finish for DIY jewelry and crafts.",
        description: "The Doraemon face charm features a high-quality enamel finish. It is lightweight and durable and is designed for DIY jewelry and craft projects. The product page also describes it as symbolizing luck and prosperity.",
        images: [
            "images/Doraemon Face Charm/1.jpeg",
            "images/Doraemon Face Charm/2.jpeg"
        ],
        relatedIds: ["cute-panda-resin-charm-6pcs", "2-color-wing-magnet-butterfly-charm", "1-crystal-bloom-accent-charm", "1-piece-golden-petal-bloom-charm", "12mm-alloy-crown-charms"],
        additionalInfo: {
            "Design": "Doraemon Face",
            "Finish": "Enamel",
            "Feature": "Lightweight",
            "Type": "Jewelry Charm",
            "Use": "DIY Jewelry and Crafts"
        }
    },
    {
        id: "double-tone-glass-beads-100-pieces",
        name: "Double Tone Glass Beads",
        category: "Beads",
        price: 150,
        oldPrice: 300,
        sku: "TBM-BEA-002",
        rating: 4.5,
        reviewCount: 23,
        tags: ["glass beads", "double tone", "100 pieces", "multicolor", "jewelry making", "beads"],
        shortDescription: "Double-tone glass beads supplied as a strand/pack of 100+ pieces for jewelry and craft projects.",
        description: "Double Tone Glass Beads are listed as 100+ pieces and are intended for jewelry-making and craft projects. The product is currently marked out of stock.",
        images: [
            "images/Double Tone Glass Beads/1.jpeg",
            "images/Double Tone Glass Beads/2.jpeg",
            "images/Double Tone Glass Beads/3.jpeg"
        ],
        relatedIds: ["crystal-beads-6mm", "drop-shaped-glass-beads-8mm", "crystal-tec-wire", "crafting-jump-rings", "24-grid-organizer-box", "1pc-clear-plastic-jewelry-organizer-box-28-grid"],
        additionalInfo: {
            "Material": "Glass",
            "Style": "Double Tone",
            "Quantity": "100+ Pieces",
            "Type": "Jewelry Beads",
            "Use": "Jewelry Making and Crafts"
        }
    },
    {
        id: "drop-shaped-glass-beads-8mm",
        name: "Drop Shaped Glass Beads 8mm",
        category: "Beads",
        price: 185,
        oldPrice: 270,
        sku: "TBM-BEA-003",
        rating: 4.3,
        reviewCount: 21,
        tags: ["glass beads", "drop shaped", "teardrop", "8mm", "jewelry making", "colorful beads"],
        shortDescription: "8mm drop-shaped glass beads with over 100 beads per strand, available in multiple colors.",
        description: "Drop Shaped Glass Beads feature an elegant drop/teardrop shape, are approximately 8mm in length, and contain over 100 beads per strand. They are available in a wide variety of vibrant and classic colors and are suitable for jewelry making, embellishments, and crafting.",
        images: [
            "images/Drop Shaped Glass Beads 8mm/1.jpeg",
            "images/Drop Shaped Glass Beads 8mm/2.jpeg",
            "images/Drop Shaped Glass Beads 8mm/3.jpeg"
        ],
        relatedIds: ["crystal-beads-6mm", "double-tone-glass-beads-100-pieces", "crystal-tec-wire", "crafting-jump-rings", "24-grid-organizer-box", "1pc-clear-plastic-jewelry-organizer-box-28-grid"],
        additionalInfo: {
            "Shape": "Drop/Teardrop",
            "Size": "8mm",
            "Quantity": "100+ Beads Per Strand",
            "Finish": "Smooth Polished",
            "Type": "Jewelry Beads",
            "Use": "Jewelry Making and Crafts"
        }
    },
    {
        id: "diy-handmade-pliers-1-golden-ring",
        name: "DIY Handmade Pliers",
        category: "Beads",
        price: 700,
        oldPrice: 849,
        sku: "TBM-JMT-003",
        rating: 4.5,
        reviewCount: 32,
        tags: ["pliers", "jewelry tools", "DIY", "handmade", "golden ring", "jewelry repair", "accessories"],
        shortDescription: "A DIY jewelry-making and repair tool listing featuring handmade pliers and golden ring accessories.",
        description: "This DIY handmade pliers product is intended for making and repairing various jewelry accessories and includes the golden-ring components described in the product title.",
        images: [
            "images/DIY Handmade Pliers/1.webp",
            "images/DIY Handmade Pliers/2.webp",
            "images/DIY Handmade Pliers/3.webp"
        ],
        relatedIds: ["crafting-jump-rings", "crystal-tec-wire", "crystal-beads-6mm", "drop-shaped-glass-beads-8mm", "12mm-alloy-crown-charms"],
        additionalInfo: {
            "Type": "Jewelry Making Pliers",
            "Included Components": "Golden Ring Components",
            "Use": "Jewelry Making and Repair",
            "Application": "Jewelry Accessories"
        }
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.productsData = productsData;
}