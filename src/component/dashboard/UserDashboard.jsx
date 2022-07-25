import React, { Suspense } from "react";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import "./user-dashboard.css";

const UserTodo = React.lazy(() => import("./UserTodo"));
const UserProfile = React.lazy(() => import("./UserProfile"));
const UserAlbums = React.lazy(() => import("./UserAlbums"));

const UserDashboard = () => {
  return (
    <React.Fragment>
      <div className='dashboard-container'>
        <section className='left container'>
          <h2>User Profile</h2>
          <ErrorBoundary fallback={<h2>Unable to fetch user profile</h2>}>
            <Suspense
              fallback={
                <h6 className='loading-text'>
                  Loading user profile, please wait...
                </h6>
              }
            >
              <UserProfile />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section className='right container'>
          <h2>User Todo</h2>
          <ErrorBoundary fallback={<h2>Unable to fetch todo</h2>}>
            <Suspense
              fallback={
                <h6 className='loading-text'>Loading todos, please wait...</h6>
              }
            >
              <UserTodo />
            </Suspense>
          </ErrorBoundary>

          <section className='user-post-container'>
            <ErrorBoundary fallback={<h2>Unable to fetch albums</h2>}>
              <h2>User Albums</h2>
              <Suspense
                fallback={
                  <h6 className='loading-text'>
                    Loading albums, please wait...
                  </h6>
                }
              >
                <UserAlbums />
              </Suspense>
            </ErrorBoundary>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};

export default UserDashboard;
