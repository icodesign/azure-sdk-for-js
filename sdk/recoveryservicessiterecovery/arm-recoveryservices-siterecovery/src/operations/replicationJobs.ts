/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/replicationJobsMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a ReplicationJobs. */
export class ReplicationJobs {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a ReplicationJobs.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of Azure Site Recovery Jobs for the vault.
   * @summary Gets the list of jobs.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationJobsListResponse>
   */
  list(options?: Models.ReplicationJobsListOptionalParams): Promise<Models.ReplicationJobsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.JobCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.ReplicationJobsListOptionalParams, callback: msRest.ServiceCallback<Models.JobCollection>): void;
  list(options?: Models.ReplicationJobsListOptionalParams | msRest.ServiceCallback<Models.JobCollection>, callback?: msRest.ServiceCallback<Models.JobCollection>): Promise<Models.ReplicationJobsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReplicationJobsListResponse>;
  }

  /**
   * Get the details of an Azure Site Recovery job.
   * @summary Gets the job details.
   * @param jobName Job identifier
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationJobsGetResponse>
   */
  get(jobName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationJobsGetResponse>;
  /**
   * @param jobName Job identifier
   * @param callback The callback
   */
  get(jobName: string, callback: msRest.ServiceCallback<Models.Job>): void;
  /**
   * @param jobName Job identifier
   * @param options The optional parameters
   * @param callback The callback
   */
  get(jobName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Job>): void;
  get(jobName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Job>, callback?: msRest.ServiceCallback<Models.Job>): Promise<Models.ReplicationJobsGetResponse> {
    return this.client.sendOperationRequest(
      {
        jobName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReplicationJobsGetResponse>;
  }

  /**
   * The operation to cancel an Azure Site Recovery job.
   * @summary Cancels the specified job.
   * @param jobName Job indentifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationJobsCancelResponse>
   */
  cancel(jobName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationJobsCancelResponse> {
    return this.beginCancel(jobName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationJobsCancelResponse>;
  }

  /**
   * The operation to restart an Azure Site Recovery job.
   * @summary Restarts the specified job.
   * @param jobName Job identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationJobsRestartResponse>
   */
  restart(jobName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationJobsRestartResponse> {
    return this.beginRestart(jobName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationJobsRestartResponse>;
  }

  /**
   * The operation to resume an Azure Site Recovery job
   * @summary Resumes the specified job.
   * @param jobName Job identifier.
   * @param resumeJobParams Resume rob comments.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationJobsResumeResponse>
   */
  resume(jobName: string, resumeJobParams: Models.ResumeJobParams, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationJobsResumeResponse> {
    return this.beginResume(jobName,resumeJobParams,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationJobsResumeResponse>;
  }

  /**
   * The operation to export the details of the Azure Site Recovery jobs of the vault.
   * @summary Exports the details of the Azure Site Recovery jobs of the vault.
   * @param jobQueryParameter job query filter.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationJobsExportMethodResponse>
   */
  exportMethod(jobQueryParameter: Models.JobQueryParameter, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationJobsExportMethodResponse> {
    return this.beginExportMethod(jobQueryParameter,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationJobsExportMethodResponse>;
  }

  /**
   * The operation to cancel an Azure Site Recovery job.
   * @summary Cancels the specified job.
   * @param jobName Job indentifier.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCancel(jobName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        jobName,
        options
      },
      beginCancelOperationSpec,
      options);
  }

  /**
   * The operation to restart an Azure Site Recovery job.
   * @summary Restarts the specified job.
   * @param jobName Job identifier.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRestart(jobName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        jobName,
        options
      },
      beginRestartOperationSpec,
      options);
  }

  /**
   * The operation to resume an Azure Site Recovery job
   * @summary Resumes the specified job.
   * @param jobName Job identifier.
   * @param resumeJobParams Resume rob comments.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResume(jobName: string, resumeJobParams: Models.ResumeJobParams, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        jobName,
        resumeJobParams,
        options
      },
      beginResumeOperationSpec,
      options);
  }

  /**
   * The operation to export the details of the Azure Site Recovery jobs of the vault.
   * @summary Exports the details of the Azure Site Recovery jobs of the vault.
   * @param jobQueryParameter job query filter.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginExportMethod(jobQueryParameter: Models.JobQueryParameter, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        jobQueryParameter,
        options
      },
      beginExportMethodOperationSpec,
      options);
  }

  /**
   * Gets the list of Azure Site Recovery Jobs for the vault.
   * @summary Gets the list of jobs.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationJobsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationJobsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobCollection>, callback?: msRest.ServiceCallback<Models.JobCollection>): Promise<Models.ReplicationJobsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReplicationJobsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCancelOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}/cancel",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRestartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}/restart",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginResumeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}/resume",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "resumeJobParams",
    mapper: {
      ...Mappers.ResumeJobParams,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginExportMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/export",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "jobQueryParameter",
    mapper: {
      ...Mappers.JobQueryParameter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
