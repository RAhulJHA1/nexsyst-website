/**
 * Trust strip logos (umenit-style).
 * Drop real marks in /public/clients/{id}.svg|png|webp and set `src`.
 * Until then, wordmark fallbacks render cleanly in mono.
 */
export type ClientLogo = {
  id: string
  name: string
  /** Optional image under /public/clients/ */
  src?: string
}

export const clientLogos: ClientLogo[] = [
  { id: "pharma", name: "Pharma Plants", src: "/clients/pharma.svg" },
  { id: "cement", name: "Process & Cement", src: "/clients/cement.svg" },
  { id: "auto", name: "Automotive Tier", src: "/clients/auto.svg" },
  { id: "industrial", name: "Industrial Services", src: "/clients/industrial.svg" },
  { id: "water", name: "Water Utilities", src: "/clients/water.svg" },
]
