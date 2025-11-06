workspace "Simple Weather" "This is my architectire pet-projecrt"

    !identifiers hierarchical

    model {
        archetypes {
            application = container {}
            datastore = container {
                tags "Database"
            }
        }
    
        user = person "User" "Persons who views weather"
        admin = person "Admin" "Persons who manages cities"
        
        openWeatherAPI = softwareSystem "Open Weather API" "External Weather Data System" {
            tags "External"
        }
        
        webClient = softwareSystem "Adaptive web client" {
            appShell = application "Shell for microfrontends applications";

            weatherApplication = application "Weather Application" {
                technology "Angular"
                description "Angular SPA for users"
            }

            adminPanel = application "Admin Panel" {
                technology "Angular"
                description "React SPA for admins"
            }

            appShell -> weatherApplication
            appShell -> adminPanel
            
            user -> appShell "gets weather data at Weather Application"
            admin -> appShell "works with cities at Admin Panel"
        }
        
        backend = softwareSystem "Backend" {
            gateway = application "API Gateway" {
                technology "NGINX / Express Gateway"
                description "Single entrypoint for WA. Routes request for services and check tokens"
            }
        
            weatherService = application "Weather Service" {
                technology "Asp.Net"
                description "Weather data and short forecast API"
            }

            authorizationService = application "Authorization Service" {
                technology "Express"
                description "Assigns JWT for user"
            }

            cityService = application "City Service" {
                technology "Express"
                description "Cities management API"
            }
            
            weatherCache = datastore "Weather Service Cache" {
                technology "Redis"
                description "Hot cache for Weather Service"
                tags "OwnedBy:Weather Service"
            }

            citiesDatabase = datastore "City Data Base" {
                technology "PostgreSQL"
                description "City Service"
                tags "OwnedBy:City Service"
            }
            
            // Routing
            gateway                 -> authorizationService "resends auth requests"
            authorizationService    -> gateway "returns JWT"

            gateway                 -> weatherService "resends weather requests"
            weatherService          -> gateway "returns weather data"

            gateway                 -> cityService "resends cities management request"
            cityService             -> gateway "returns answers"
            
            // Inner Relations
            cityService             -> citiesDatabase "saves cities states"
            weatherService          -> weatherCache  "saves weather cache"
            
            // External Relations
            weatherService          -> openWeatherAPI "requests weather data"
            openWeatherAPI          -> weatherService "returns weather data"
        }
        
        webClient           -> backend.gateway "Weather and cities requests"
        backend.gateway     -> webClient "returns answers"
    
    }

    views {
        systemContext webClient "AdaptiveWebClientSystemView" {
            include *
            autolayout lr
        }

        container webClient "AdaptiveWebClientContainersView" {
            include *
            autolayout lr
        }
        
        systemContext backend "BackendSystemView" {
            include *
            autolayout lr
        }

        container backend "BackendContainersView" {
            include *
            autolayout lr
        }
        
        styles {
            element "Element" {
                color #0773af
                stroke #0773af
                shape roundedbox
            }

            element "Person" {
                shape person
            }

            element "Database" {
                shape cylinder
            }

            element "Boundary" {
            }

            relationship "Relationship" {
                thickness 4
            }

            element "External" {
                color #af1e07
                stroke #af1e07
                shape hexagon
            }
        }
    }

}