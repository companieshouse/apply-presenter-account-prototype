//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/v2/generate-new-code', function(request, response) {

    var newCode = request.session.data['newCode']
    if (newCode == "no"){
        response.redirect("/v2/confirmation")
    } else {
        response.redirect("/v2/enter-your-details")
    }
})

router.post('/v2/filter', function(request, response) {

    var filter = request.session.data['filter']
    if (filter == "fee"){
        response.redirect("/v2/stop")
    } else if (filter == "charges"){
        response.redirect("/v2/stop")
    } else {
        response.redirect("/v2/sign-in")
    }
})

module.exports=router;

