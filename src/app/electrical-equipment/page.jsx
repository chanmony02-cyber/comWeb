import ElectricalEquipmentPage from "@/features/ElectricalEquipment/ElectricalEquipment";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Electrical Equipment",
  "Explore the electrical equipment catalog and product solutions."
);

export default function Page() {
  return <ElectricalEquipmentPage />;
}

