import coder from "../assets/images/coder.jpg"

export default function AboutMe() {
  return (

    <div>
      <h1 className="mt-4 text-center">About Stephanie Jones</h1>
      <p className="h4">
        I am a homeschool mom who is currently enrolled in a coding bootcamp program at University of Pennsylvania. I have a Bachelor's degree in Chemistry and a Master's degree in Education. I enjoy biking, hiking and camping with my husband and two young daughters.
      </p>

      <img
        src={coder}
        className="my-2"
        style={{ width: "20%" }}
        alt="cover"
      ></img>
    </div>
  );
}