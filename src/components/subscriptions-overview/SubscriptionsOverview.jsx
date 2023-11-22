import Link from "next/link";
import SubscriptionsOverviewCard from "@/components/subscriptions-overview/SubscriptionsOverviewCard";

const SubscriptionsOverview = () => {
  return (
    <div className="px-8 py-6 bg-gradient-to-t from-gray-200 to-white">
      <header className="flex items-center gap-2 mb-3">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-black text-2xl font-bold">X-Plor</h1>
          <svg
            className="h-6 w-6"
            width="349"
            height="349"
            viewBox="0 0 349 349"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M97.366 5.336C86.508 12.0949 74.76 23.1225 68.53 31.8379C64.258 38.2411 63.19 38.7747 57.85 37.8854C46.28 35.9289 35.6 46.9565 37.914 58.5174C38.804 62.9644 38.092 64.2094 31.862 68.6564C18.512 77.9054 0 101.027 0 108.498C0 111.699 6.408 110.454 13.528 105.652C22.428 99.7824 38.448 84.3084 42.72 77.3714C45.924 72.2134 46.458 72.0354 55.536 72.9254C64.614 73.8144 65.148 74.1704 73.336 85.0194C85.796 101.383 89 113.656 89 144.249V168.794L121.93 169.328C140.086 169.683 154.86 169.683 154.86 169.328C154.86 169.15 147.206 157.233 137.95 143.181C128.694 128.952 121.04 117.035 121.04 116.502C121.04 115.968 127.804 115.612 136.17 115.612H151.3L162.336 132.509C168.566 141.758 173.906 149.407 174.44 149.407C174.974 149.407 180.492 141.758 186.544 132.509L197.58 115.612H212.888C225.17 115.612 228.018 116.146 227.306 118.102C226.772 119.347 219.118 131.442 210.218 144.604C201.318 157.944 194.02 168.972 194.02 169.328C194.02 169.683 208.794 169.683 226.772 169.328L259.524 168.794L260.236 140.869C261.126 108.498 263.618 99.9604 276.968 83.0634C284.978 72.9254 285.156 72.9254 294.768 72.9254C300.108 72.9254 304.38 73.6364 304.38 74.7034C304.38 75.5924 309.186 81.4624 315.06 87.8654C326.452 99.9604 340.692 110.276 346.032 110.276C356.178 110.276 333.572 79.3284 314.526 66.6994C310.788 64.2094 310.076 62.7864 310.966 58.5174C313.28 47.1344 302.6 35.9289 291.03 37.8854C285.868 38.7747 284.8 38.0632 279.104 30.415C267.534 14.9407 243.86 -2.4901 239.944 1.4229C235.672 5.6917 255.786 32.1937 271.094 42.6877C276.79 46.6008 277.146 47.3123 276.434 54.9604C275.722 61.7194 274.298 64.3874 268.246 70.0794C264.152 73.8144 255.608 79.5064 249.2 82.5294L237.63 88.0434H174.44H111.25L99.68 82.5294C93.272 79.5064 84.728 73.8144 80.634 70.0794C74.404 64.2094 73.158 61.8974 72.446 54.6044C72.09 49.9802 72.268 46.2451 73.158 46.2451C76.362 46.2451 101.46 20.8103 105.91 12.9842C110.36 5.6917 110.894 0 107.156 0C106.444 0 101.994 2.3123 97.366 5.336ZM60.164 54.4264C60.876 59.5854 56.07 63.4984 52.51 60.4744C49.662 58.1624 48.95 53.0044 51.086 50.8694C53.578 48.3794 59.63 50.6914 60.164 54.4264ZM298.684 54.4264C299.396 59.5854 294.59 63.4984 291.03 60.4744C288.182 58.1624 287.47 53.0044 289.606 50.8694C292.098 48.3794 298.15 50.6914 298.684 54.4264Z"
              fill="#000000"
            />
            <path
              d="M88.8219 208.636C88.1099 237.094 87.9319 237.806 82.4139 249.189C79.2099 255.77 73.5139 264.308 69.9539 268.221C64.2579 274.268 61.7659 275.513 54.8239 276.225C46.8139 276.936 46.2799 276.758 41.6519 269.999C30.9719 254.881 5.51793 235.671 1.42393 239.762C-2.84807 244.031 18.6899 272.134 33.1079 281.027C38.2699 284.229 38.8039 285.474 37.9139 290.098C35.5999 301.837 46.1019 312.687 58.2059 310.731C61.4099 310.197 64.0799 310.375 64.0799 311.086C64.0799 313.754 83.8379 334.209 92.2039 340.434C110.716 353.952 116.056 349.505 102.706 331.541C95.4079 321.58 86.8639 313.043 76.3619 305.039C72.0899 301.837 71.7339 300.77 72.8019 292.588C73.8699 284.229 74.5819 283.161 85.0839 275.335C104.308 260.75 110.36 259.683 174.44 259.683C238.52 259.683 244.572 260.75 263.796 275.335C274.298 283.161 275.01 284.229 276.078 292.588C277.146 300.77 276.79 301.837 272.518 304.861C270.026 306.818 262.55 313.576 256.142 320.157C237.63 339.011 233.358 352.885 248.132 345.948C255.786 342.391 275.366 324.604 281.24 316.067C284.978 310.731 286.224 310.019 291.03 310.731C303.134 312.687 312.746 302.727 310.788 290.454C310.076 285.474 310.788 284.229 315.594 281.205C322.714 276.758 338.2 260.928 344.252 251.857C349.058 244.742 350.304 238.339 347.1 238.339C339.802 238.339 315.772 257.905 305.092 272.312C302.066 276.58 300.998 276.936 292.81 275.869C284.444 274.802 283.376 274.09 275.544 263.596C263.084 247.233 259.88 234.96 259.88 204.367V179.644H226.772C200.962 179.644 194.02 180.177 195.088 181.778C195.8 183.023 203.454 194.762 212.176 207.569C220.72 220.553 227.84 231.58 227.84 232.114C227.84 232.648 221.076 233.003 212.71 233.003H197.58L186.544 216.106C180.314 206.857 174.974 199.209 174.44 199.209C173.906 199.209 168.566 206.857 162.336 216.106L151.3 233.003H136.17C127.804 233.003 121.04 232.648 121.04 232.114C121.04 231.58 128.16 220.553 136.704 207.569C145.426 194.762 153.08 183.023 153.792 181.778C154.86 180.177 148.096 179.644 122.286 179.644H89.3559L88.8219 208.636ZM59.6299 293.478C59.6299 296.679 58.5619 298.102 55.5359 298.458C53.2219 298.814 51.0859 297.924 50.5519 296.323C48.7719 291.699 51.2639 287.786 55.5359 288.497C58.5619 288.853 59.6299 290.276 59.6299 293.478ZM298.15 293.478C298.15 296.679 297.082 298.102 294.056 298.458C291.742 298.814 289.606 297.924 289.072 296.323C287.292 291.699 289.784 287.786 294.056 288.497C297.082 288.853 298.15 290.276 298.15 293.478Z"
              fill="#000000"
            />
          </svg>
        </Link>
      </header>
      <main className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h3 className="text-brandCyan mb-2">Our plans</h3>
          <h3 className="text-5xl text-black mb-4">
            Simple and
            <br /> Transparant <span className="bg-gradient-to-r from-brandCyan to-brandBlack bg-clip-text text-transparent">pricing</span>
          </h3>
          <p className="text-brandBlack">
            Prices that follow the growth of the business, so you will never be
            paying more than you need.
          </p>
        </div>
        <section className="flex w-full gap-12 mt-12 justify-between">
          <SubscriptionsOverviewCard
            name="Lewis & Clark"
            description="Soar into adventure with 10 flight hours, expert training, and support."
            price="21.99"
            features={[
              "10 hours flight time",
              "Specialized training",
              "Customer support",
              "Max 1 rental per week",
            ]}
          />
          <SubscriptionsOverviewCard
            name="Marco Polo"
            description="Elevate your journey with 24 hours of flight, plus priority access."
            price="44.99"
            features={[
				"Comprehensive benefits from Lewis & Clark",
				"24/7 access to customer support",
				"Exclusive discounts on additional rentals",
				"Customized travel recommendations",
				"Access to members-only events and experiences"
			  ]}
          />
          <SubscriptionsOverviewCard
            name="Magellan"
            description="Unleash boundless exploration with 48 hours, 24/7 support, and unlimited rentals."
            price="84.99"
            features={[
				"Unmatched perks from Marco Polo tier",
				"48 hours of flexible flight time every month",
				"24/7 concierge-level customer support",
				"Exclusive access to premium destinations",
				"Unlimited opportunities for spontaneous adventures",
				"Personalized VIP travel consultations"
			  ]}
          />
          <SubscriptionsOverviewCard
            name="Quick Explore"
            description="Dive into discovery at just $3.29 per hour. Start exploring now!"
            price="3.29"
            features={[
              "Discover with no strings attached",
              "Seamless trial experience, no commitment",
              "Pay-as-you-go adventure, zero waste",
            ]}
          />
        </section>
      </main>
    </div>
  );
};

export default SubscriptionsOverview;
