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
    name: 'Sea Cucumber',
    species: 'Holothurian',
    description: 'Carefully processed and sun-dried for consistent texture, moisture control, and export-grade quality.',
    image: '/image1.JPG',
    tag: 'Premium dried',
    specification: 'Available by grade, size, and packing requirement.',
  },
  {
    name: 'Sand Fish',
    species: 'Holothuria scabra',
    description: 'A prized tropical sea cucumber, expertly sourced and processed for specialist international buyers.',
    image: '/image2.JPG',
    tag: 'High demand',
    specification: 'Discuss current availability and preferred finish with our team.',
  },
  {
    name: 'Dried Cuttlefish',
    species: 'Sepia species',
    description: 'Carefully cleaned and dried cuttlefish, selected for consistent size, finish, and export-ready packing.',
    image: '/image3.JPG',
    tag: 'Export selected',
    specification: 'Prepared to suit wholesale quantities and destination needs.',
  },
  {
    name: 'Dried Fish Maw',
    species: 'Premium swim bladder',
    description: 'Naturally dried fish maw selected by size, thickness, and finish for discerning international markets.',
    image: '/image4.JPG',
    tag: 'Naturally dried',
    specification: 'Grading can be discussed against your market specification.',
  },
  {
    name: 'Dried Abalone',
    species: 'Haliotis species',
    description: 'A rare delicacy, graded and packed with attention to presentation, preservation, and shipment readiness.',
    image: '/IMG_1025.JPG',
    tag: 'Limited supply',
    specification: 'Limited supply; early enquiries are encouraged.',
  },
]
