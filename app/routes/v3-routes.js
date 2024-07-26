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


router.post('/v3/have-number', function(request, response) {

    var haveNumber = request.session.data['haveNumber']
    if (haveNumber == "yes"){
        response.redirect("/v3/company-number")
    } else {
        response.redirect("/v3/company-name")
    }
})


router.post('/v3/type-filings', function(request, response) {

    var typeFilings = request.session.data['typeFilings']
    if (typeFilings == "one"){
        response.redirect("/v3/company-number")
    } else {
        response.redirect("/v3/have-number")
    }
})

module.exports=router;

