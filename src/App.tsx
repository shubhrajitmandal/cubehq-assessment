import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { IUser } from "./models";
import { Users, UserDetail } from "./components";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const selectUser = useCallback((user: IUser) => setSelectedUser(user), []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Users selectedUser={selectedUser} selectUser={selectUser} />
        {selectedUser && (
          <UserDetail user={selectedUser} key={selectedUser.id} />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
