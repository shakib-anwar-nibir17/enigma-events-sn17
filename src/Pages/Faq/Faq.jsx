const Faq = () => {
  return (
    <div className="container mx-auto mt-16 space-y-4 px-4">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What types of entertainment events does Enigma Events organize?
        </div>
        <div className="collapse-content">
          <p>
            Enigma Events specializes in organizing a wide range of
            entertainment events, including concerts, music festivals, theater
            performances, film screenings, and sports events. We are dedicated
            to delivering unforgettable entertainment experiences to our
            audience.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I purchase tickets for Enigma Events?
        </div>
        <div className="collapse-content">
          <p>
            Purchasing tickets for Enigma Events is easy! You can visit our
            website and navigate to the event page you are interested in. From
            there, you can select the ticket options and make a secure online
            payment. We also offer on-site ticket sales at the venue on the day
            of the event.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Are there any special discounts available for group bookings?
        </div>
        <div className="collapse-content">
          <p>
            Yes, Enigma Events offers special discounts for group bookings. If
            you plan to attend our events with a group of friends or colleagues,
            please contact our customer support team, and they will assist you
            in arranging group tickets at discounted rates.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I get a refund for my ticket if I can not attend the event?
        </div>
        <div className="collapse-content">
          <p>
            Enigma Events has a refund policy in place. If you are unable to
            attend an event, please refer to our refund policy on our website
            for detailed information. Refunds are typically available within a
            specified timeframe before the event.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I stay updated on upcoming Enigma Events?
        </div>
        <div className="collapse-content">
          <p>
            To stay updated on our upcoming events, you can subscribe to our
            newsletter on our website. We also regularly post event
            announcements and updates on our social media channels, so make sure
            to follow us on Facebook, Twitter, and Instagram.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is parking available at Enigma Events venues?
        </div>
        <div className="collapse-content">
          <p>
            Enigma Events provides parking facilities at most of our event
            venues. The availability of parking may vary depending on the venue.
            We recommend checking the event details on our website for specific
            parking information for each event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
