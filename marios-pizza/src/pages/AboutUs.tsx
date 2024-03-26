export function AboutUs() {
  return (
    <div className="flex flex-row p-20 justify-center content-center items-center">
      <div className="basis-1/2 text-center mr-10">
        <p className="font-bold text-3xl">About Us</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum,
          laboriosam quaerat dolor labore magnam culpa distinctio pariatur nobis
          amet. Fugiat suscipit ad quas delectus impedit! Quae cum explicabo
          eaque?
        </p>
      </div>
      <div className="basis-1/2">
        <img
          className="rounded-lg"
          src="/images/staff_720.jpg"
          alt="team-picture"
        />
      </div>
    </div>
  );
}
