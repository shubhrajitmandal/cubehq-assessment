import { IUser } from "../models";
import { useFetchImages } from "../hooks";
import { Loader } from "./Loader";

interface IProps {
  user: IUser;
}

export const UserDetail = ({ user }: IProps) => {
  const images = useFetchImages(user.firstName);

  const { address, city, state, country } = user.address;

  return (
    <div className="user-details">
      <h1 className="name">{user.firstName + "  " + user.lastName}</h1>
      <p className="title">{user.company.title}</p>
      <p className="address">
        {address + ", " + city + ", " + state + ", " + country}
      </p>
      <div className="photo-grid">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            {image.isLoading ? (
              <Loader />
            ) : (
              <img src={image?.imgURL} className="image" alt="image" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
