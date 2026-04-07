<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import ElectricalEquipmentPage from "@/pages/ElectricalEquipment";

export const metadata = {
  title: "Electrical Equipment",
  description: siteConfig.description,
};

export default function Page() {
  return <ElectricalEquipmentPage />;
}
=======
import ElectricalEquipment from "@/screens/ElectricalEquipment";

export const metadata = {
  title: "Electrical Equipment",
};

export default function ElectricalEquipmentPage() {
  return <ElectricalEquipment />;
}

>>>>>>> Stashed changes
