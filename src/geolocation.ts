class GeoLocator {
    public status: GeoLocator.Status;
    public position?: GeolocationPosition;

    constructor() {
        this.status = navigator.geolocation ?
            GeoLocator.Status.UNINITIALIZED : GeoLocator.Status.NO_GPS;

        /*
          var locationButton = document.createElement("Button");
          locationButton.innerHTML = "Locate me!";
          var btnDiv = document.getElementById("locate-btn");
          btnDiv.appendChild(locationButton);
        */
    }

    public getPosition() {
        if (!navigator.geolocation) {
            this.status = GeoLocator.Status.NO_GPS;
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.position = position;
                console.log('getPosition fired!');
            },
            (error) => {
                console.warn(`GeoLocator: error ${error.code}, ${error.message}`);
                this.status = GeoLocator.Status.UNKNOWN_ERROR;
                return;
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 60
            });

        this.status = GeoLocator.Status.SUCCESS;
    }
}

namespace GeoLocator {
    export enum Status {
        SUCCESS = 0,
        NO_GPS,
        UNINITIALIZED,
        UNKNOWN_ERROR,
    }
}

function init() {
    console.log("GeoLocator is live");
}
