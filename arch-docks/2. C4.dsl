workspace "Simple Weather" "This is my architectire pet-projecrt"

    !identifiers hierarchical

    model {
        // users
        user = person "User"
        admin = person "Admin"
        
        awc = softwareSystem "Adaptive web client" {
            wa = container "Web Application"
            ap = container "Admin Panel"
        }
        
        be = softwareSystem "Backend" {
            ws = container "Weather Service"
            wc = container "Weather Hot Cache" {
                tags "Database"
            }
            cs = container "City Service"
            cdb = container "City Data Base" {
                tags "Database"
            }
        }

        user -> awc.wa "gets weather data"
        admin -> awc.ap "works with cities"
        
        awc.wa -> be.ws "requests weather data"
        awc.wa -> be.cs "requests supported cities"
        awc.ap -> be.cs "sends cities changes"
        
        be.cs -> be.cdb "saves cities states"
        be.ws -> be.wc  "saves weather cache"
    }

    views {
        systemContext awc "AdaptiveWebClientSystemView" {
            include *
            autolayout lr
        }

        container awc "AdaptiveWebClientContainersView" {
            include *
            autolayout lr
        }
        
        systemContext be "BackendSystemView" {
            include *
            autolayout lr
        }

        container be "BackendContainersView" {
            include *
            autolayout lr
        }

        styles {
            element "Element" {
                color #0773af
                stroke #0773af
                stroke Width 7
                shape roundedbox
            }
            element "Person" {
                shape person
            }
            element "Database" {
                shape cylinder
            }
            element "Boundary" {
                stroke Width 5
            }
            relationship "Relationship" {
                thickness 4
            }
        }
    }

}