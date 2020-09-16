import * as core from '@actions/core'
import axios from 'axios'

async function run(): Promise<void> {
  try {
    const swaggerUrl: string = core.getInput('swaggerUrl')
    const apiManagementEndpointUrl: string = core.getInput(
      'apiManagementEndpointUrl'
    )
    const creds: string = core.getInput('creds')

    if (swaggerUrl == null) {
      core.setFailed('Missing swagger URL from input')
    }
    if (apiManagementEndpointUrl == null) {
      core.setFailed('Missing Api manager endpoint from input')
    }
    if (creds == null) {
      core.setFailed('Missing access token from input')
    }
    //Request an OAUth Token
    core.info('Parse Json')
    const jsonObj = JSON.parse(creds)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    core.info('Get token')
    let response = null
    try {
      response = await axios.post(
        `https://login.microsoftonline.com/${jsonObj.tenantId}/oauth2/token`,
        `grant_type=client_credentials&client_id=${jsonObj.clientId}&client_secret=${jsonObj.clientSecret}&resource=https%3A%2F%2Fmanagement.azure.com%2F`,
        config
      )
      core.info(response.data)
    } catch (err) {
      core.error(err)
    }
    const putData = {
      properties: {
        format: 'openapi+json-link',
        value: `${swaggerUrl}`,
        path: 'hallsoll'
      }
    }

    //PUT get response to API manager
    await axios.put(apiManagementEndpointUrl, putData, {
      headers: {Authorization: `Bearer ${response?.data.access_token}`}
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
