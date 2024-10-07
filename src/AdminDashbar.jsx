import React from 'react';
import CardComponent from './CardComponent';

const Dashboard = () => {
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>

        <div className="row">
          <div className="col-xl-6 col-xxl-5 d-flex">
            <div className="w-100">
              <div className="row">
                <div className="col-sm-6">
                  <CardComponent title="Sales" value="2.382" percentage="-3.65%" status="text-danger" icon="truck" />
                  <CardComponent title="Visitors" value="14.212" percentage="5.25%" status="text-success" icon="users" />
                </div>
                <div className="col-sm-6">
                  <CardComponent title="Earnings" value="$21,300" percentage="6.65%" status="text-success" icon="dollar-sign" />
                  <CardComponent title="Orders" value="64" percentage="-2.25%" status="text-danger" icon="shopping-cart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-7">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">Recent Movement</h5>
              </div>
              <div className="card-body py-3">
                <div className="chart chart-sm">
                  <canvas id="chartjs-dashboard-line"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
