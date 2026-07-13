export type Product = {
  name: string
  species: string
  description: string
  image: string
  tag: string
  specification: string
}

export const products: Product[] = [
  {
    name: 'Sand Fish',
    species: 'Holothuria scabra',
    description: 'A prized tropical sea cucumber, expertly sourced and processed for specialist international buyers.',
    image: '/image2.JPG',
    tag: 'Export grade',
    specification: 'Discuss current availability and preferred finish with our team.',
  },
  {
    name: 'Brown Fish / Disco',
    species: 'Holothuria spinifera',
    description: 'Carefully processed and sun-dried for consistent texture, moisture control, and export-grade quality.',
    image: '/image1.JPG',
    tag: 'Premium dried',
    specification: 'Available by grade, size, and packing requirement.',
  },
  {
    name: 'Flower Tiger',
    species: 'Holothuria spp.',
    description: 'A premium sea cucumber variety, graded and packed with attention to presentation, preservation, and shipment readiness.',
    image: '/flower-tiger.png',
    tag: 'High demand',
    specification: 'Prepared to suit wholesale quantities and destination needs.',
  },
  {
    name: 'Baby Curry Fish',
    species: 'Stichopus herrmanni',
    description: 'Carefully cleaned and dried baby curry fish, selected for consistent size, finish, and export-ready packing.',
    image: '/image4.JPG',
    tag: 'Export selected',
    specification: 'Grading can be discussed against your market specification.',
  },
  {
    name: 'Top Shell Meat',
    species: 'Trochus spp.',
    description: 'Premium top shell meat, ethically harvested and meticulously processed for global seafood markets.',
    image: '/IMG_1025.JPG',
    tag: 'Limited supply',
    specification: 'Limited supply; early enquiries are encouraged.',
  },
]
