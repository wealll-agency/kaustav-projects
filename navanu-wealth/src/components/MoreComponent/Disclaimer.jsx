import React from "react";
import { Link } from "react-router-dom";
const Disclaimer = () => {
  return (
    <>
      <div className="breadcrumb_section text-center">
        <div className="container">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Disclaimers
            </li>
          </ol>
        </div>
      </div>

      <div className="disclaimer_section">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-4">
              <div className="left_sidebar">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#disclaimers">Disclaimers</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#privacy-policy">Privacy Policy</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#terms">Terms & Conditions</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#code-of-ethics">Code of Ethics & Conduct</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#sebi">SEBI Guidelines</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div class="tab-content disclaimer_tab_content">
                <div id="disclaimers" class="tab-pane active">
                  <h3>Disclaimers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vel dolor commodo felis convallis porta eu sed felis.
                    Quisque ipsum tortor, vestibulum id dolor eget, fringilla
                    posuere turpis. Sed velit lectus, pretium ut scelerisque at,
                    commodo sit amet justo. Etiam eros nunc, gravida at purus
                    maximus, consequat pulvinar sem. Cras nec sollicitudin
                    mauris, id sollicitudin nunc. Fusce fermentum imperdiet
                    pellentesque. Sed gravida ultricies purus nec vulputate.
                    Donec non rhoncus est, a ullamcorper eros. Sed metus lacus,
                    finibus at elementum ac, pharetra a ligula.
                  </p>
                  <p>
                    Mauris nec felis a risus hendrerit aliquet id sit amet leo.
                    Proin convallis massa justo, ac posuere est tristique quis.
                    Donec accumsan eu dui faucibus congue. Pellentesque pretium
                    magna non tortor egestas, non tempor quam eleifend. Aenean
                    lacinia tortor commodo velit pharetra, id imperdiet justo
                    maximus. Vivamus vulputate velit dui, accumsan dictum nibh
                    maximus et. Sed non semper metus. Vestibulum nec dolor at
                    nunc convallis egestas a sit amet ex.
                  </p>
                  <p>
                    Mauris egestas turpis sed turpis mollis luctus id vel massa.
                    Cras ut mauris accumsan, vulputate purus sed, egestas quam.
                    Morbi ut dignissim ligula, non consequat tellus. Aliquam
                    elementum arcu sem, in commodo eros vestibulum at. In
                    lobortis nisi mauris, ac volutpat augue tincidunt eget. In
                    vel est sed quam tincidunt venenatis. Etiam rutrum orci ut
                    est cursus malesuada. Ut ac orci non dui condimentum
                    fermentum. Pellentesque aliquam lectus felis, id fermentum
                    nisl auctor eget. Nam elementum neque at tempor varius.
                    Aenean maximus metus urna, at tristique nibh feugiat ac.
                    Aenean sodales turpis eu sem luctus accumsan. Nulla ac
                    fringilla lectus, quis varius ex.
                  </p>
                  <p>
                    Ut faucibus commodo nulla in venenatis. Vestibulum rutrum
                    ultricies felis, in pharetra tellus faucibus at. Sed finibus
                    cursus pharetra. Donec nec risus sit amet nisl faucibus
                    commodo imperdiet non orci. Integer eget dui vel neque
                    maximus aliquet nec id nisl. Integer vitae velit non ipsum
                    facilisis sollicitudin et vel ex. Sed nibh mi, aliquam ac
                    enim vel, euismod vulputate felis. Donec condimentum viverra
                    erat ac pretium. Cras feugiat vel libero quis tempus.
                  </p>
                  <p>
                    Mauris justo lectus, euismod a arcu sed, consectetur
                    vehicula nunc. Fusce imperdiet nunc pharetra tellus
                    accumsan, ut facilisis dui consequat. Sed convallis eget
                    turpis ac eleifend. Vestibulum non mauris accumsan, aliquet
                    quam ut, sodales tellus. Nullam elementum semper lacus, ac
                    laoreet lorem sollicitudin in. Phasellus congue, erat at
                    pulvinar imperdiet, turpis quam tempus urna, eu ultrices
                    tellus enim sit amet ipsum. In vehicula posuere orci, nec
                    eleifend justo ornare sit amet. Nam lobortis felis maximus
                    tincidunt vehicula. Nulla id orci at ipsum pretium finibus.
                    Curabitur at enim vitae tellus mattis pellentesque ut vel
                    eros. Sed lorem augue, elementum vitae diam id, tempor
                    faucibus erat. Quisque et orci odio. Nullam sagittis
                    tincidunt congue.
                  </p>
                </div>
                <div id="privacy-policy" class="tab-pane fade">
                  <h3>Privacy Policy</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vel dolor commodo felis convallis porta eu sed felis.
                    Quisque ipsum tortor, vestibulum id dolor eget, fringilla
                    posuere turpis. Sed velit lectus, pretium ut scelerisque at,
                    commodo sit amet justo. Etiam eros nunc, gravida at purus
                    maximus, consequat pulvinar sem. Cras nec sollicitudin
                    mauris, id sollicitudin nunc. Fusce fermentum imperdiet
                    pellentesque. Sed gravida ultricies purus nec vulputate.
                    Donec non rhoncus est, a ullamcorper eros. Sed metus lacus,
                    finibus at elementum ac, pharetra a ligula.
                  </p>
                  <p>
                    Mauris nec felis a risus hendrerit aliquet id sit amet leo.
                    Proin convallis massa justo, ac posuere est tristique quis.
                    Donec accumsan eu dui faucibus congue. Pellentesque pretium
                    magna non tortor egestas, non tempor quam eleifend. Aenean
                    lacinia tortor commodo velit pharetra, id imperdiet justo
                    maximus. Vivamus vulputate velit dui, accumsan dictum nibh
                    maximus et. Sed non semper metus. Vestibulum nec dolor at
                    nunc convallis egestas a sit amet ex.
                  </p>
                  <p>
                    Mauris egestas turpis sed turpis mollis luctus id vel massa.
                    Cras ut mauris accumsan, vulputate purus sed, egestas quam.
                    Morbi ut dignissim ligula, non consequat tellus. Aliquam
                    elementum arcu sem, in commodo eros vestibulum at. In
                    lobortis nisi mauris, ac volutpat augue tincidunt eget. In
                    vel est sed quam tincidunt venenatis. Etiam rutrum orci ut
                    est cursus malesuada. Ut ac orci non dui condimentum
                    fermentum. Pellentesque aliquam lectus felis, id fermentum
                    nisl auctor eget. Nam elementum neque at tempor varius.
                    Aenean maximus metus urna, at tristique nibh feugiat ac.
                    Aenean sodales turpis eu sem luctus accumsan. Nulla ac
                    fringilla lectus, quis varius ex.
                  </p>
                  <p>
                    Ut faucibus commodo nulla in venenatis. Vestibulum rutrum
                    ultricies felis, in pharetra tellus faucibus at. Sed finibus
                    cursus pharetra. Donec nec risus sit amet nisl faucibus
                    commodo imperdiet non orci. Integer eget dui vel neque
                    maximus aliquet nec id nisl. Integer vitae velit non ipsum
                    facilisis sollicitudin et vel ex. Sed nibh mi, aliquam ac
                    enim vel, euismod vulputate felis. Donec condimentum viverra
                    erat ac pretium. Cras feugiat vel libero quis tempus.
                  </p>
                  <p>
                    Mauris justo lectus, euismod a arcu sed, consectetur
                    vehicula nunc. Fusce imperdiet nunc pharetra tellus
                    accumsan, ut facilisis dui consequat. Sed convallis eget
                    turpis ac eleifend. Vestibulum non mauris accumsan, aliquet
                    quam ut, sodales tellus. Nullam elementum semper lacus, ac
                    laoreet lorem sollicitudin in. Phasellus congue, erat at
                    pulvinar imperdiet, turpis quam tempus urna, eu ultrices
                    tellus enim sit amet ipsum. In vehicula posuere orci, nec
                    eleifend justo ornare sit amet. Nam lobortis felis maximus
                    tincidunt vehicula. Nulla id orci at ipsum pretium finibus.
                    Curabitur at enim vitae tellus mattis pellentesque ut vel
                    eros. Sed lorem augue, elementum vitae diam id, tempor
                    faucibus erat. Quisque et orci odio. Nullam sagittis
                    tincidunt congue.
                  </p>
                </div>
                <div id="terms" class="tab-pane fade">
                  <h3>Terms & Conditions</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vel dolor commodo felis convallis porta eu sed felis.
                    Quisque ipsum tortor, vestibulum id dolor eget, fringilla
                    posuere turpis. Sed velit lectus, pretium ut scelerisque at,
                    commodo sit amet justo. Etiam eros nunc, gravida at purus
                    maximus, consequat pulvinar sem. Cras nec sollicitudin
                    mauris, id sollicitudin nunc. Fusce fermentum imperdiet
                    pellentesque. Sed gravida ultricies purus nec vulputate.
                    Donec non rhoncus est, a ullamcorper eros. Sed metus lacus,
                    finibus at elementum ac, pharetra a ligula.
                  </p>
                  <p>
                    Mauris nec felis a risus hendrerit aliquet id sit amet leo.
                    Proin convallis massa justo, ac posuere est tristique quis.
                    Donec accumsan eu dui faucibus congue. Pellentesque pretium
                    magna non tortor egestas, non tempor quam eleifend. Aenean
                    lacinia tortor commodo velit pharetra, id imperdiet justo
                    maximus. Vivamus vulputate velit dui, accumsan dictum nibh
                    maximus et. Sed non semper metus. Vestibulum nec dolor at
                    nunc convallis egestas a sit amet ex.
                  </p>
                  <p>
                    Mauris egestas turpis sed turpis mollis luctus id vel massa.
                    Cras ut mauris accumsan, vulputate purus sed, egestas quam.
                    Morbi ut dignissim ligula, non consequat tellus. Aliquam
                    elementum arcu sem, in commodo eros vestibulum at. In
                    lobortis nisi mauris, ac volutpat augue tincidunt eget. In
                    vel est sed quam tincidunt venenatis. Etiam rutrum orci ut
                    est cursus malesuada. Ut ac orci non dui condimentum
                    fermentum. Pellentesque aliquam lectus felis, id fermentum
                    nisl auctor eget. Nam elementum neque at tempor varius.
                    Aenean maximus metus urna, at tristique nibh feugiat ac.
                    Aenean sodales turpis eu sem luctus accumsan. Nulla ac
                    fringilla lectus, quis varius ex.
                  </p>
                  <p>
                    Ut faucibus commodo nulla in venenatis. Vestibulum rutrum
                    ultricies felis, in pharetra tellus faucibus at. Sed finibus
                    cursus pharetra. Donec nec risus sit amet nisl faucibus
                    commodo imperdiet non orci. Integer eget dui vel neque
                    maximus aliquet nec id nisl. Integer vitae velit non ipsum
                    facilisis sollicitudin et vel ex. Sed nibh mi, aliquam ac
                    enim vel, euismod vulputate felis. Donec condimentum viverra
                    erat ac pretium. Cras feugiat vel libero quis tempus.
                  </p>
                  <p>
                    Mauris justo lectus, euismod a arcu sed, consectetur
                    vehicula nunc. Fusce imperdiet nunc pharetra tellus
                    accumsan, ut facilisis dui consequat. Sed convallis eget
                    turpis ac eleifend. Vestibulum non mauris accumsan, aliquet
                    quam ut, sodales tellus. Nullam elementum semper lacus, ac
                    laoreet lorem sollicitudin in. Phasellus congue, erat at
                    pulvinar imperdiet, turpis quam tempus urna, eu ultrices
                    tellus enim sit amet ipsum. In vehicula posuere orci, nec
                    eleifend justo ornare sit amet. Nam lobortis felis maximus
                    tincidunt vehicula. Nulla id orci at ipsum pretium finibus.
                    Curabitur at enim vitae tellus mattis pellentesque ut vel
                    eros. Sed lorem augue, elementum vitae diam id, tempor
                    faucibus erat. Quisque et orci odio. Nullam sagittis
                    tincidunt congue.
                  </p>
                </div>
                <div id="code-of-ethics" class="tab-pane fade">
                  <h3>Code of Ethics & Conduct</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vel dolor commodo felis convallis porta eu sed felis.
                    Quisque ipsum tortor, vestibulum id dolor eget, fringilla
                    posuere turpis. Sed velit lectus, pretium ut scelerisque at,
                    commodo sit amet justo. Etiam eros nunc, gravida at purus
                    maximus, consequat pulvinar sem. Cras nec sollicitudin
                    mauris, id sollicitudin nunc. Fusce fermentum imperdiet
                    pellentesque. Sed gravida ultricies purus nec vulputate.
                    Donec non rhoncus est, a ullamcorper eros. Sed metus lacus,
                    finibus at elementum ac, pharetra a ligula.
                  </p>
                  <p>
                    Mauris nec felis a risus hendrerit aliquet id sit amet leo.
                    Proin convallis massa justo, ac posuere est tristique quis.
                    Donec accumsan eu dui faucibus congue. Pellentesque pretium
                    magna non tortor egestas, non tempor quam eleifend. Aenean
                    lacinia tortor commodo velit pharetra, id imperdiet justo
                    maximus. Vivamus vulputate velit dui, accumsan dictum nibh
                    maximus et. Sed non semper metus. Vestibulum nec dolor at
                    nunc convallis egestas a sit amet ex.
                  </p>
                  <p>
                    Mauris egestas turpis sed turpis mollis luctus id vel massa.
                    Cras ut mauris accumsan, vulputate purus sed, egestas quam.
                    Morbi ut dignissim ligula, non consequat tellus. Aliquam
                    elementum arcu sem, in commodo eros vestibulum at. In
                    lobortis nisi mauris, ac volutpat augue tincidunt eget. In
                    vel est sed quam tincidunt venenatis. Etiam rutrum orci ut
                    est cursus malesuada. Ut ac orci non dui condimentum
                    fermentum. Pellentesque aliquam lectus felis, id fermentum
                    nisl auctor eget. Nam elementum neque at tempor varius.
                    Aenean maximus metus urna, at tristique nibh feugiat ac.
                    Aenean sodales turpis eu sem luctus accumsan. Nulla ac
                    fringilla lectus, quis varius ex.
                  </p>
                  <p>
                    Ut faucibus commodo nulla in venenatis. Vestibulum rutrum
                    ultricies felis, in pharetra tellus faucibus at. Sed finibus
                    cursus pharetra. Donec nec risus sit amet nisl faucibus
                    commodo imperdiet non orci. Integer eget dui vel neque
                    maximus aliquet nec id nisl. Integer vitae velit non ipsum
                    facilisis sollicitudin et vel ex. Sed nibh mi, aliquam ac
                    enim vel, euismod vulputate felis. Donec condimentum viverra
                    erat ac pretium. Cras feugiat vel libero quis tempus.
                  </p>
                  <p>
                    Mauris justo lectus, euismod a arcu sed, consectetur
                    vehicula nunc. Fusce imperdiet nunc pharetra tellus
                    accumsan, ut facilisis dui consequat. Sed convallis eget
                    turpis ac eleifend. Vestibulum non mauris accumsan, aliquet
                    quam ut, sodales tellus. Nullam elementum semper lacus, ac
                    laoreet lorem sollicitudin in. Phasellus congue, erat at
                    pulvinar imperdiet, turpis quam tempus urna, eu ultrices
                    tellus enim sit amet ipsum. In vehicula posuere orci, nec
                    eleifend justo ornare sit amet. Nam lobortis felis maximus
                    tincidunt vehicula. Nulla id orci at ipsum pretium finibus.
                    Curabitur at enim vitae tellus mattis pellentesque ut vel
                    eros. Sed lorem augue, elementum vitae diam id, tempor
                    faucibus erat. Quisque et orci odio. Nullam sagittis
                    tincidunt congue.
                  </p>
                </div>
                <div id="sebi" class="tab-pane fade">
                  <h3>SEBI Guidelines</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vel dolor commodo felis convallis porta eu sed felis.
                    Quisque ipsum tortor, vestibulum id dolor eget, fringilla
                    posuere turpis. Sed velit lectus, pretium ut scelerisque at,
                    commodo sit amet justo. Etiam eros nunc, gravida at purus
                    maximus, consequat pulvinar sem. Cras nec sollicitudin
                    mauris, id sollicitudin nunc. Fusce fermentum imperdiet
                    pellentesque. Sed gravida ultricies purus nec vulputate.
                    Donec non rhoncus est, a ullamcorper eros. Sed metus lacus,
                    finibus at elementum ac, pharetra a ligula.
                  </p>
                  <p>
                    Mauris nec felis a risus hendrerit aliquet id sit amet leo.
                    Proin convallis massa justo, ac posuere est tristique quis.
                    Donec accumsan eu dui faucibus congue. Pellentesque pretium
                    magna non tortor egestas, non tempor quam eleifend. Aenean
                    lacinia tortor commodo velit pharetra, id imperdiet justo
                    maximus. Vivamus vulputate velit dui, accumsan dictum nibh
                    maximus et. Sed non semper metus. Vestibulum nec dolor at
                    nunc convallis egestas a sit amet ex.
                  </p>
                  <p>
                    Mauris egestas turpis sed turpis mollis luctus id vel massa.
                    Cras ut mauris accumsan, vulputate purus sed, egestas quam.
                    Morbi ut dignissim ligula, non consequat tellus. Aliquam
                    elementum arcu sem, in commodo eros vestibulum at. In
                    lobortis nisi mauris, ac volutpat augue tincidunt eget. In
                    vel est sed quam tincidunt venenatis. Etiam rutrum orci ut
                    est cursus malesuada. Ut ac orci non dui condimentum
                    fermentum. Pellentesque aliquam lectus felis, id fermentum
                    nisl auctor eget. Nam elementum neque at tempor varius.
                    Aenean maximus metus urna, at tristique nibh feugiat ac.
                    Aenean sodales turpis eu sem luctus accumsan. Nulla ac
                    fringilla lectus, quis varius ex.
                  </p>
                  <p>
                    Ut faucibus commodo nulla in venenatis. Vestibulum rutrum
                    ultricies felis, in pharetra tellus faucibus at. Sed finibus
                    cursus pharetra. Donec nec risus sit amet nisl faucibus
                    commodo imperdiet non orci. Integer eget dui vel neque
                    maximus aliquet nec id nisl. Integer vitae velit non ipsum
                    facilisis sollicitudin et vel ex. Sed nibh mi, aliquam ac
                    enim vel, euismod vulputate felis. Donec condimentum viverra
                    erat ac pretium. Cras feugiat vel libero quis tempus.
                  </p>
                  <p>
                    Mauris justo lectus, euismod a arcu sed, consectetur
                    vehicula nunc. Fusce imperdiet nunc pharetra tellus
                    accumsan, ut facilisis dui consequat. Sed convallis eget
                    turpis ac eleifend. Vestibulum non mauris accumsan, aliquet
                    quam ut, sodales tellus. Nullam elementum semper lacus, ac
                    laoreet lorem sollicitudin in. Phasellus congue, erat at
                    pulvinar imperdiet, turpis quam tempus urna, eu ultrices
                    tellus enim sit amet ipsum. In vehicula posuere orci, nec
                    eleifend justo ornare sit amet. Nam lobortis felis maximus
                    tincidunt vehicula. Nulla id orci at ipsum pretium finibus.
                    Curabitur at enim vitae tellus mattis pellentesque ut vel
                    eros. Sed lorem augue, elementum vitae diam id, tempor
                    faucibus erat. Quisque et orci odio. Nullam sagittis
                    tincidunt congue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
