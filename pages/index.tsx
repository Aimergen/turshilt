import Image from "next/image";
import Info from "./components/Info";
import FacebookCustomerChat from "./components/FacebookCustomerChat";

export default function Home() {
  return (
    <div>
      <Info />
      <FacebookCustomerChat />
    </div>
  );
}
