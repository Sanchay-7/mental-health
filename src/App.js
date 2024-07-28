import './App.css';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="link">Dashboard</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a class="nav-link" href="link5">Forums</a></li>
                <li class="nav-item"><a class="nav-link" href="#link4">Contacts</a></li>
                <li class="nav-item"><a class="nav-link" href="link3">News</a></li>
                <li class="nav-item"><a class="nav-link" href="link2">Events</a></li>
                <li class="nav-item"><a class="nav-link" href="link1">Therapists</a></li>
            </ul>
            <span>
            <span class="navbar-text mr-2 px-4">Abishek</span>
            <a class="btn btn-outline-light" href="null">Logout</a>
            </span>
        </div>
    </nav>

    <div class="container mt-4">
        <h1 class="text-center">Mental Health</h1>
        <div class="row">
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src={img1} class="card-img-top" alt="Stress" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Stress</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src={img2} class="card-img-top" alt="Anxiety" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Anxiety</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src={img3} class="card-img-top" alt="Depression" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Depression</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src={img4} class="card-img-top" alt="Loneliness" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Loneliness</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src={img5} class="card-img-top" alt="ADHD" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Bad Vibes</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src={img6} class="card-img-top" alt="Bipolar Disorder" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Sleep</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src={img7} class="card-img-top" alt="Eating Disorders" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Eating Disorders</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default App;
