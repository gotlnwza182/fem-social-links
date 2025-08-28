import Button from "./Button";
import ProfileImage from "./ProfileImage";

const Card = () => {
  return (
    <div className="bg-grey-800 flex w-[20.5rem] flex-col items-center gap-6 rounded-xl p-6 text-white md:w-96 md:p-10">
      <ProfileImage />
      <div>
        <h1 className="text-2xl font-semibold capitalize">Jessca randall</h1>
        <p className="text-green text-sm font-semibold capitalize">
          london, united kingodom
        </p>
      </div>

      <p className="text-sm">"Front-end developer and avid reader."</p>

      <div className="flex w-full flex-col gap-4">
        <Button text={"GitHub"} />
        <Button text={"frontend mentor"} />
        <Button text={"LinkedIn"} />
        <Button text={"twitter"} />
        <Button text={"instagram"} />
      </div>
    </div>
  );
};
export default Card;
