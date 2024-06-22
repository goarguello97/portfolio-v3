import Network from "./Network";
import { networks } from "../data/networks";

const Networks = () => {
  return (
    <section>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Mis redes
      </h2>
      {networks.map((network, i) => (
        <Network
          network={network.network}
          title={network.title}
          link={network.link}
          logo={network.logo}
          key={i}
        />
      ))}
    </section>
  );
};

export default Networks;
