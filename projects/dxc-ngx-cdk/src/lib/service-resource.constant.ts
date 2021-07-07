export const baseCodesPath = 'codestable/{codetable}/codes';
export const baseResourcePath = 'pages/{pageid}/resources?format=all';
export const baseGridStatePath = 'grids/{gridid}/state';
export const baseUsersPath = 'users';
export const baseGroupsPath = 'groups';
export const tpacodemappingURL = 'generalsystemparameter/tpacodemappings';
export const tpacodemappingdeleteURL = 'generalsystemparameter/tpacodemappings/{tpaId}';
export const scheduledateURL = 'paymentparameter/scheduledates';
export const supplementalfieldsURL = 'supplementaltables/grids/{gridId}/fields';
export const scheduledatedeleteURL = 'paymentparameter/scheduledates/{scheduleId}';
export const financialkeyURL = 'paymentparameter/financialkeys/{keyId}';
export const financialkeyControlDataURL = 'paymentparameter/lineofbusiness/{lobId}/financialcriterias';
export const financialkeydeleteURL = 'paymentparameter/financialkeys/{rowId}';
export const financiallistURL = 'paymentparameter/financialkeys';
export const financialKeySetingURL = 'paymentparameter/financialkeytypes/{financialkeytypeId}';
export const deductibleMappingURL = 'lineofbusinesses/{lobCode}/deductibleReserveMappings';
export const deductibleMappingDeleteURL = 'lineofbusinesses/{lobCode}/deductibleReserveMappings/{mappingRowId}';
export const scriptEditorRoute = { base: 'scripts', delete: '{scriptId}', get: '{scriptId}' };
export const scriptEditorTemplateRoute = { base: 'scripttemplates' };
export const scriptModelsRoute = { base: 'scriptmodels' };
export const scriptServiceRoute = { base: 'scriptservice' };
export const indexListUrl = '{formname}/{tablename}/indexes';
export const indexCreateUrl = '{formname}/{tablename}/indexes';
export const fieldListUrl = '{formname}/{tablename}/controls';
export const fieldCreateUrl = '{formname}/{tablename}/controls/{controlId}';

export enum ServiceRequest {
  CLAIMSERVER = 'CLAIMSERVER',
  CODESERVER = 'CODESERVER',
  ENTITYSERVER = 'ENTITYSERVER',
  RESOURCESERVER = 'RESOURCESERVER',
  UTITILTYSERVER = 'UTITILTYSERVER',
  RMASERVER = 'RMASERVER',
  CLAIMSROOTURI = 'CLAIMSROOTURI',
  USERSERVER = 'USERSERVER',
  WORKFLOW = 'WORKFLOWSERVER'
}
