import developement from "/iot-controller/milesight-development-platform.jpg";

export default function Developement() {
  return (
    <div className="w-full sm:mt-5 text-black font-light flex justify-center items-start  gap-4">
      <a href="/resources/developer-zone">
        <div className="h-50 mt-2">
          <img src={developement} alt="" />
        </div>
      </a>
      <div>
        <p>
          <strong>Milesight Development Platform</strong>
          <br /> From device deployment and management to custom integration and
          application development, Milesight helps you get your project off the
          ground.
        </p>
      </div>
    </div>
  );
}
