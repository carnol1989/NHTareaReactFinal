import React from 'react';
import Skeleton from 'react-loading-skeleton';

function LoaderHeroes(props) {
  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-danger">
                <Skeleton />
              </strong>
              <h3 className="mb-0">
                <Skeleton />
              </h3>
              <div className="mb-1 text-muted">
                <Skeleton />
              </div>
            </div>
            <div className="col-auto d-none d-lg-block">
              <Skeleton
                height={250}
                width={200}
                style={{ paddingTop: '5px' }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-danger">
                <Skeleton />
              </strong>
              <h3 className="mb-0">
                <Skeleton />
              </h3>
              <div className="mb-1 text-muted">
                <Skeleton />
              </div>
            </div>
            <div className="col-auto d-none d-lg-block">
              <Skeleton
                height={250}
                width={200}
                style={{ paddingTop: '5px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoaderHeroes;
