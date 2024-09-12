import { useFetchUsers } from "../hooks/useFetchUsers";
import { IUser } from "../models";
import { Loader } from "./Loader";

interface IProps {
  selectedUser: IUser | null;
  selectUser: (user: IUser) => void;
}

export const Users = ({ selectedUser, selectUser }: IProps) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchUsers();

  if (isLoading) {
    return (
      <div className="user-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="user-container">
      {data?.pages.map(({ users }) =>
        users.map((user) => (
          <div
            key={user.id}
            onClick={() => selectUser(user)}
            className={`user-item ${
              !!selectedUser && selectedUser.id === user.id && "selected"
            }`}
          >
            <h3 className="user-name">
              {user.firstName + " " + user.lastName}
            </h3>
            <p className="user-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              ut enim, quis error iure.
            </p>
          </div>
        ))
      )}

      {hasNextPage && (
        <div className="button-wrapper">
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
