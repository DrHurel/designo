import { CallToAction } from "../../components/callToAction"

export default function CallToActionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <>
      <main>{children}</main>
      <CallToAction />
    </>

  )
}
