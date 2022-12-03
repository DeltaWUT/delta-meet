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
                this.status = GeoLocator.Status.SUCCESS;

                var storedValue = {
                    coords: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                    timestamp: position.timestamp
                };

                try {
                    window.sessionStorage.setItem('location', JSON.stringify(storedValue));
                } catch (e: any) {
                    if (e instanceof DOMException && e.name === 'SecurityError') {
                        console.error(`GeoLocator: ${e.message}`);
                        this.status = GeoLocator.Status.SECURITY_VIOLATION;
                    } else {
                        this.status = GeoLocator.Status.UNKNOWN_ERROR;
                    }
                }

                console.log(`getPosition fired! Exit status: ${this.status}`);
            },
            (error) => {
                console.error(`GeoLocator: ${error.message}`);
                this.status = GeoLocator.Status.UNKNOWN_ERROR;
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 60
            });
    }
}

namespace GeoLocator {
    export enum Status {
        SUCCESS = 0,        // Geolocation succeeded
        UNINITIALIZED,      // GeoLocator not used, ignore member fields
        NO_GPS,             // Device does not support geolocation
        SECURITY_VIOLATION, // Browser policy violation, local storage not allowed
        UNKNOWN_ERROR,
    }
}

function init() {
    console.log("GeoLocator is live");
}
