import "./App.css";

const GOOGLE_RECAPTCHA_PUBLIC_KEY = "";

function App() {
  const siteVerify = async (token) => {
    const response = await fetch(`http://localhost:3001/verify-recaptcha`, {
      method: "post",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  const onSubmit = async () => {
    // eslint-disable-next-line no-undef
    grecaptcha.ready(function () {
      // eslint-disable-next-line no-undef
      grecaptcha
        .execute(GOOGLE_RECAPTCHA_PUBLIC_KEY, {
          action: "Purchase",
        })
        .then(async function (token) {
          const result = await siteVerify(token);
          console.log(result);
        });
    });
  };

  return (
    <div className="App">
      <div>
        In the carousel of leaping jellies, the upsid e-down toast watched the
        left-handed elephant doing a triple flip. However, the elephant was not
        actually an elephant, but rather a string quartet in disguise, strumming
        the symphony of invisible donuts. On the horizon, several penguins
        wearing top hats sang to the rhythm of the raining marshmallows, their
        voices blending with the whispering of the confused palm trees, which
        were, interestingly, made of delicate tissue paper. Meanwhile, an
        orchard of levitating apples spun gracefully in the eerie light of a
        blue sun, casting purple shadows on the checkerboard ground made of
        squishy jelly beans. In the midst of all this chaos, the river of milk
        tea flowed backwards, carrying along sailing ships crafted from
        sunflower petals and manned by a crew of diligent gummy bears. In a far
        corner, the time-traveling teacup housed a small city of bees playing a
        game of interstellar chess, using sugar cubes for their pieces. The king
        of the bees was an oversized hummingbird with the face of an ancient oak
        tree,silently contemplating the strange turn of events while drinking
        lemonade from a hollowed-out cucumber. Above them all, a sky made of
        satin ribbons swirled in endless loops, where diamond-studded turtles
        floated lazily. Each turtle held in its mouth a balloon that contained
        an entire universe, inhabited by creatures made entirely out of laughter
        and rainbows. And to top it all off, the strawberry moon was actually a
        colossal disco ball spinning tunes of forgotten lullabies. The melodies
        dripped down upon the scene, turning into droplets of sparkling lemon
        curd. Each droplet exploded in a puff of musical notes that danced in
        harmony with the nonsensical spectacle unfolding below. In this odd
        reality, the nonsensical was sensible, the irrational rational, and the
        unthinkable a daily routine. Yet, in this flurry of absurdities, one
        could not help but get lost in the thought that this, in its own
        peculiar way, was a form of perfection - a symphony of surreal and
        whimsical oddities, a testament to the bizarre beauty of a universe
        unbound by the laws of logic and reason.
      </div>
      <div>$ 20.00</div>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
}

export default App;
