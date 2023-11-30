//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/generate-new-code', function(request, response) {

    var newCode = request.session.data['newCode']
    if (newCode == "no"){
        response.redirect("/confirmation")
    } else {
        response.redirect("/enter-your-details")
    }
})

router.post('/filter', function(request, response) {

    var filter = request.session.data['filter']
    if (filter == "fee"){
        response.redirect("/stop")
    } else if (filter == "charges"){
        response.redirect("/stop")
    } else {
        response.redirect("/sign-in")
    }
})

