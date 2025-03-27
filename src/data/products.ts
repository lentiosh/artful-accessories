
export type Product = {
  id: string;
  name: string;
  category: 'accessories' | 'jewelry';
  description: string;
  shortDescription: string;
  price: string;
  images: string[];
  materials: string[];
  dimensions?: string;
  featured: boolean;
  new: boolean;
};

export const products: Product[] = [
  // Accessories
  {
    id: 'acc-001',
    name: 'Handwoven Straw Beach Bag',
    category: 'accessories',
    description: 'This handwoven straw beach bag is perfect for summer outings. Each bag is meticulously crafted using traditional Greek weaving techniques, making it not just a functional item but also a piece of art. The natural straw material is both lightweight and durable, while the leather handles add a touch of elegance and ensure comfortable carrying.',
    shortDescription: 'Handwoven straw beach bag with leather handles, perfect for summer.',
    price: '€45',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
      'https://images.unsplash.com/photo-1575485670541-ebc97aedc424'
    ],
    materials: ['Natural straw', 'Genuine leather handles'],
    dimensions: '40cm x 30cm x 15cm',
    featured: true,
    new: false
  },
  {
    id: 'acc-002',
    name: 'Embroidered Linen Hair Scarf',
    category: 'accessories',
    description: 'Add a touch of Greek elegance to your hairstyle with this embroidered linen hair scarf. Hand-embroidered with traditional Greek patterns, each scarf tells a story of heritage and craftsmanship. The premium linen fabric feels soft against your skin while providing durability for everyday wear.',
    shortDescription: 'Hand-embroidered linen hair scarf with traditional Greek patterns.',
    price: '€28',
    images: [
      'https://images.unsplash.com/photo-1606222742642-36270e8d6d81',
      'https://images.unsplash.com/photo-1623114014902-fda9479ecd40'
    ],
    materials: ['100% Premium linen', 'Embroidery thread'],
    dimensions: '90cm x 15cm',
    featured: false,
    new: true
  },
  {
    id: 'acc-003',
    name: 'Leather Belt with Hammered Buckle',
    category: 'accessories',
    description: 'This hand-crafted leather belt features a unique hammered metal buckle inspired by ancient Greek designs. Each belt is cut from premium full-grain leather and treated with natural oils for a rich finish that develops a beautiful patina over time. The hand-hammered buckle showcases the skilled craftsmanship that goes into every piece.',
    shortDescription: 'Premium leather belt with hand-hammered metal buckle inspired by ancient Greek designs.',
    price: '€65',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      'https://images.unsplash.com/photo-1591079381491-57fbe98ae62e'
    ],
    materials: ['Full-grain leather', 'Hand-hammered metal buckle'],
    dimensions: 'Available in sizes S, M, L, XL',
    featured: true,
    new: false
  },
  {
    id: 'acc-004',
    name: 'Olive Wood Sunglasses Case',
    category: 'accessories',
    description: 'Protect your sunglasses in style with this handcrafted olive wood case. Made from sustainably harvested Greek olive wood, each case features unique grain patterns that showcase the natural beauty of the material. The smooth, polished finish and magnetic closure combine functionality with elegant design.',
    shortDescription: 'Handcrafted sunglasses case made from Greek olive wood with unique grain patterns.',
    price: '€38',
    images: [
      'https://images.unsplash.com/photo-1633967306491-4660d0876c5f',
      'https://images.unsplash.com/photo-1589675862527-9ba88c7ad11b'
    ],
    materials: ['Greek olive wood', 'Metal hinges', 'Suede lining'],
    dimensions: '17cm x 6cm x 4cm',
    featured: false,
    new: false
  },
  {
    id: 'acc-005',
    name: 'Hand-Painted Silk Scarf',
    category: 'accessories',
    description: 'Each of these silk scarves is hand-painted with motifs inspired by the Aegean Sea and Greek landscapes. The premium silk provides a luxurious feel and beautiful drape, while the hand-painted designs ensure that each piece is unique. Versatile enough to be worn as a neck scarf, head wrap, or even a lightweight shawl.',
    shortDescription: 'Hand-painted silk scarf with designs inspired by the Aegean Sea and Greek landscapes.',
    price: '€85',
    images: [
      'https://images.unsplash.com/photo-1599839619722-39751411ea63',
      'https://images.unsplash.com/photo-1645447465270-682cefac6ff8'
    ],
    materials: ['100% Pure silk'],
    dimensions: '180cm x 55cm',
    featured: true,
    new: true
  },
  {
    id: 'acc-006',
    name: 'Woven Leather Key Chain',
    category: 'accessories',
    description: 'This handwoven leather key chain combines traditional Greek craftsmanship with contemporary design. Made from supple leather strips that are intricately woven together, it features a sturdy metal ring and clasp for securely holding your keys. The natural leather will develop a rich patina over time, making each piece uniquely yours.',
    shortDescription: 'Handwoven leather key chain with sturdy metal hardware.',
    price: '€18',
    images: [
      'https://images.unsplash.com/photo-1626753596082-6c8cf3098977',
      'https://images.unsplash.com/photo-1585139792463-2bbaf9172367'
    ],
    materials: ['Genuine leather', 'Metal hardware'],
    dimensions: '15cm x 3cm',
    featured: false,
    new: false
  },
  {
    id: 'acc-007',
    name: 'Ceramic Hair Pins Set',
    category: 'accessories',
    description: 'This set of three ceramic hair pins is handcrafted and glazed to create unique, delicate accessories for your hair. Each pin features a different Greek-inspired design, from Mediterranean blues to ancient patterns. The pins are lightweight yet sturdy, perfect for securing your hair while adding a touch of artisanal elegance.',
    shortDescription: 'Set of three handcrafted ceramic hair pins with Greek-inspired designs.',
    price: '€32',
    images: [
      'https://images.unsplash.com/photo-1592704906858-d6326d316cb2',
      'https://images.unsplash.com/photo-1609252925314-a549ba3d824e'
    ],
    materials: ['Hand-glazed ceramic', 'Stainless steel pins'],
    dimensions: 'Each pin measures approximately 10cm',
    featured: false,
    new: true
  },
  {
    id: 'acc-008',
    name: 'Hand-Knit Wool Beanie',
    category: 'accessories',
    description: 'Stay warm in style with this hand-knit wool beanie. Made from locally sourced Greek sheep wool, each beanie is knitted using traditional techniques that have been passed down through generations. The natural wool provides excellent insulation while allowing your skin to breathe, making it perfect for cool weather.',
    shortDescription: 'Hand-knit beanie made from locally sourced Greek sheep wool.',
    price: '€42',
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9',
      'https://images.unsplash.com/photo-1612215327266-e21c5a0be2e0'
    ],
    materials: ['100% Greek sheep wool'],
    dimensions: 'One size fits most adults',
    featured: false,
    new: false
  },
  {
    id: 'acc-009',
    name: 'Cotton Macramé Market Bag',
    category: 'accessories',
    description: 'This macramé market bag is handcrafted from 100% organic cotton using traditional knotting techniques. Perfect for shopping, beach trips, or everyday use, the open-weave design is both stylish and practical. The bag is surprisingly strong and expands to hold your essentials while maintaining its beautiful form.',
    shortDescription: 'Handcrafted macramé market bag made from organic cotton.',
    price: '€35',
    images: [
      'https://images.unsplash.com/photo-1564422169878-a0515d671c11',
      'https://images.unsplash.com/photo-1605591077661-5a0d5a5733e9'
    ],
    materials: ['100% Organic cotton'],
    dimensions: '35cm x 40cm (expands when filled)',
    featured: true,
    new: false
  },
  {
    id: 'acc-010',
    name: 'Leather and Canvas Passport Holder',
    category: 'accessories',
    description: 'Keep your travel documents safe and stylish with this handmade passport holder. Combining premium leather with durable canvas, it features multiple slots for your passport, cards, and small travel essentials. The minimalist design is enhanced with subtle stitching details and a discreet embossed pattern inspired by Greek architecture.',
    shortDescription: 'Handmade passport holder combining premium leather and durable canvas.',
    price: '€48',
    images: [
      'https://images.unsplash.com/photo-1566323124805-7010bc1bd216',
      'https://images.unsplash.com/photo-1516571748982-e5391cc4c0db'
    ],
    materials: ['Premium leather', 'Durable canvas', 'Cotton lining'],
    dimensions: '15cm x 11cm (closed)',
    featured: false,
    new: true
  },
  
  // Jewelry
  {
    id: 'jew-001',
    name: 'Silver Olive Leaf Pendant Necklace',
    category: 'jewelry',
    description: 'This sterling silver necklace features a delicately crafted olive leaf pendant, symbolizing peace and abundance in Greek culture. Each leaf is individually formed and textured to capture the natural beauty of real olive leaves, then finished with a subtle polish that catches the light beautifully. The pendant hangs from a fine silver chain that can be adjusted for the perfect length.',
    shortDescription: 'Sterling silver necklace with hand-crafted olive leaf pendant.',
    price: '€75',
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401',
      'https://images.unsplash.com/photo-1599643444685-d9586af6f747'
    ],
    materials: ['925 Sterling silver'],
    dimensions: 'Chain length: 40-45cm (adjustable), Pendant: 2.5cm',
    featured: true,
    new: false
  },
  {
    id: 'jew-002',
    name: 'Copper Spiral Earrings',
    category: 'jewelry',
    description: 'These striking spiral earrings are hand-formed from copper wire, inspired by ancient Greek spiral designs symbolizing eternity and life energy. The copper has been given a light patina that highlights the curves while maintaining a warm, metallic glow. Lightweight and balanced, they create an elegant statement that moves beautifully with you.',
    shortDescription: 'Hand-formed copper spiral earrings inspired by ancient Greek designs.',
    price: '€38',
    images: [
      'https://images.unsplash.com/photo-1630020853447-53a9f2e4c4d1',
      'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52'
    ],
    materials: ['Pure copper', 'Nickel-free ear wires'],
    dimensions: 'Length: 5cm, Width: 2cm',
    featured: false,
    new: true
  },
  {
    id: 'jew-003',
    name: 'Mediterranean Sea Glass Bracelet',
    category: 'jewelry',
    description: 'This unique bracelet features authentic sea glass collected from the shores of the Mediterranean, each piece naturally tumbled by the sea to a smooth, frosted finish. The glass pieces in various blues and greens are wire-wrapped by hand and connected with delicate sterling silver links, creating a piece that captures the essence of the Greek seaside.',
    shortDescription: 'Bracelet featuring hand-collected Mediterranean sea glass with sterling silver components.',
    price: '€59',
    images: [
      'https://images.unsplash.com/photo-1620110214991-a662adb385c3',
      'https://images.unsplash.com/photo-1602752250015-52934bc45613'
    ],
    materials: ['Authentic Mediterranean sea glass', '925 Sterling silver wire and findings'],
    dimensions: 'Length: 19cm with 2cm extender chain',
    featured: true,
    new: false
  },
  {
    id: 'jew-004',
    name: 'Hammered Brass Cuff Bracelet',
    category: 'jewelry',
    description: 'This statement cuff bracelet is hand-hammered from a single piece of brass, creating a textured surface that catches the light beautifully. Inspired by artifacts from ancient Greece, the design combines timeless elegance with a modern edge. The natural properties of brass allow it to develop a unique patina over time, making each piece truly one-of-a-kind.',
    shortDescription: 'Hand-hammered brass cuff bracelet inspired by ancient Greek artifacts.',
    price: '€68',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638'
    ],
    materials: ['Solid brass'],
    dimensions: 'Width: 2.5cm, Adjustable fit for most wrist sizes',
    featured: false,
    new: false
  },
  {
    id: 'jew-005',
    name: 'Silver and Leather Evil Eye Bracelet',
    category: 'jewelry',
    description: 'This elegant bracelet combines soft leather cord with a sterling silver evil eye charm—a traditional Greek symbol of protection. The eye is crafted with meticulous attention to detail, featuring blue enamel and a delicate silver bezel. The adjustable leather cord allows for a perfect fit, making this both a meaningful and versatile addition to any jewelry collection.',
    shortDescription: 'Adjustable leather bracelet with handcrafted sterling silver and enamel evil eye charm.',
    price: '€42',
    images: [
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a'
    ],
    materials: ['925 Sterling silver', 'Genuine leather', 'Blue enamel'],
    dimensions: 'Adjustable length: 16-24cm, Charm diameter: 1.2cm',
    featured: true,
    new: true
  },
  {
    id: 'jew-006',
    name: 'Ceramic Geometric Statement Ring',
    category: 'jewelry',
    description: 'This bold statement ring features a handcrafted ceramic centerpiece with a geometric design inspired by ancient Greek patterns. The ceramic component is glazed in a rich Mediterranean blue and set in adjustable brass, creating a striking contrast. Each ring is slightly unique due to the handmade nature of the ceramic piece.',
    shortDescription: 'Statement ring with handcrafted ceramic centerpiece in Mediterranean blue.',
    price: '€32',
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d'
    ],
    materials: ['Hand-glazed ceramic', 'Brass setting'],
    dimensions: 'Adjustable band, Ceramic piece: 2cm diameter',
    featured: false,
    new: false
  },
  {
    id: 'jew-007',
    name: 'Woven Silver Wire Pendant',
    category: 'jewelry',
    description: 'This intricate pendant showcases the ancient Greek technique of wire weaving, with fine sterling silver wire meticulously hand-woven into a complex geometric pattern. The weaving creates beautiful light and shadow effects, making the pendant appear to change as it moves. Suspended from a sterling silver snake chain, this is both a piece of jewelry and wearable art.',
    shortDescription: 'Pendant featuring intricate hand-woven sterling silver wire in geometric pattern.',
    price: '€88',
    images: [
      'https://images.unsplash.com/photo-1600721391689-2564bb8055de',
      'https://images.unsplash.com/photo-1611591440569-9e449a1f6211'
    ],
    materials: ['925 Sterling silver wire', 'Sterling silver chain'],
    dimensions: 'Pendant: 3cm diameter, Chain: 45cm',
    featured: false,
    new: true
  },
  {
    id: 'jew-008',
    name: 'Olive Wood and Resin Ring',
    category: 'jewelry',
    description: 'This unique ring combines Greek olive wood with colored resin to create a striking band that showcases the beautiful grain of the wood. Each ring is carefully handcrafted, with the resin poured in layers to achieve a depth of color reminiscent of the Aegean Sea. The wood is treated with natural oils to enhance its durability while maintaining its organic character.',
    shortDescription: 'Handcrafted ring combining Greek olive wood with blue resin inspired by the Aegean Sea.',
    price: '€55',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e'
    ],
    materials: ['Greek olive wood', 'Non-toxic resin'],
    dimensions: 'Available in sizes 5-10 (US)',
    featured: true,
    new: false
  },
  {
    id: 'jew-009',
    name: 'Twisted Silver Hoop Earrings',
    category: 'jewelry',
    description: "These elegant hoop earrings are hand-formed from sterling silver wire that has been carefully twisted to create a beautiful texture that catches the light as you move. The classic hoop shape is given a unique character through the twisting technique, which references traditional Greek metalwork methods. Lightweight and secure, they're perfect for everyday wear.",
    shortDescription: 'Hand-twisted sterling silver hoop earrings with textured finish.',
    price: '€46',
    images: [
      'https://images.unsplash.com/photo-1625476963240-13861ac1a9ab',
      'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52'
    ],
    materials: ['925 Sterling silver'],
    dimensions: 'Diameter: 3cm',
    featured: false,
    new: false
  },
  {
    id: 'jew-010',
    name: 'Mixed Metal Layered Necklace',
    category: 'jewelry',
    description: 'This sophisticated layered necklace combines three different metals—silver, brass, and copper—each hand-hammered into delicate discs of varying sizes. The discs are arranged to create a balanced composition that moves beautifully with the wearer. Each disc is subtly textured to reflect light differently, creating a dynamic play of tones and sheens.',
    shortDescription: 'Layered necklace featuring hand-hammered discs in silver, brass, and copper.',
    price: '€78',
    images: [
      'https://images.unsplash.com/photo-1636138089875-261f793b0394',
      'https://images.unsplash.com/photo-1599643444685-d9586af6f747'
    ],
    materials: ['925 Sterling silver', 'Brass', 'Copper', 'Silver-plated chain'],
    dimensions: 'Length: 45cm with 5cm extender, Discs range from 0.8-1.5cm',
    featured: true,
    new: true
  }
];

export const getProductsByCategory = (category: 'accessories' | 'jewelry') => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getNewProducts = () => {
  return products.filter(product => product.new);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
