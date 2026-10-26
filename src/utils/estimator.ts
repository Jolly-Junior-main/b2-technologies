export type ServiceId = 
  | 'web-dev'
  | 'cloud-hosting'
  | 'digital-marketing'
  | 'it-support'
  | 'custom-solutions';

export type ProjectScope = 'startup' | 'growth' | 'enterprise';
export type DeliverySpeed = 'standard' | 'accelerated';

export interface EstimatorInput {
  selectedServices: ServiceId[];
  scope: ProjectScope;
  speed: DeliverySpeed;
  includeAudit?: boolean;
  dedicatedSla?: boolean;
}

export interface EstimationResult {
  minBudget: number;
  maxBudget: number;
  minWeeks: number;
  maxWeeks: number;
  summary: string;
  recommendedArchitecture: string;
}

export const BASE_SERVICE_PRICING: Record<ServiceId, { min: number; max: number; baseWeeks: number; name: string }> = {
  'web-dev': {
    name: 'Website Development',
    min: 4500,
    max: 12000,
    baseWeeks: 4,
  },
  'cloud-hosting': {
    name: 'Cloud & Hosting',
    min: 2500,
    max: 7500,
    baseWeeks: 2,
  },
  'digital-marketing': {
    name: 'Digital Marketing',
    min: 3000,
    max: 8000,
    baseWeeks: 3,
  },
  'it-support': {
    name: 'IT Support & Maintenance',
    min: 2000,
    max: 6000,
    baseWeeks: 2,
  },
  'custom-solutions': {
    name: 'Custom Solutions',
    min: 7500,
    max: 22000,
    baseWeeks: 6,
  },
};

export const SCOPE_MULTIPLIERS: Record<ProjectScope, number> = {
  startup: 1.0,
  growth: 1.6,
  enterprise: 2.5,
};

export function calculateEstimate(input: EstimatorInput): EstimationResult {
  if (!input.selectedServices || input.selectedServices.length === 0) {
    return {
      minBudget: 0,
      maxBudget: 0,
      minWeeks: 0,
      maxWeeks: 0,
      summary: 'Select one or more services to generate an estimate.',
      recommendedArchitecture: 'Custom specification upon initial consultation.',
    };
  }

  let totalMin = 0;
  let totalMax = 0;
  let maxWeeks = 0;

  for (const sId of input.selectedServices) {
    const config = BASE_SERVICE_PRICING[sId];
    if (config) {
      totalMin += config.min;
      totalMax += config.max;
      maxWeeks = Math.max(maxWeeks, config.baseWeeks);
    }
  }

  // Multi-service synergy discount (10% off for 2+ services, 15% off for 3+)
  const serviceCount = input.selectedServices.length;
  let discount = 1.0;
  if (serviceCount >= 3) {
    discount = 0.85;
  } else if (serviceCount === 2) {
    discount = 0.90;
  }

  const scopeMultiplier = SCOPE_MULTIPLIERS[input.scope] || 1.0;

  totalMin = Math.round(totalMin * discount * scopeMultiplier);
  totalMax = Math.round(totalMax * discount * scopeMultiplier);

  if (input.includeAudit) {
    totalMin += 1200;
    totalMax += 2500;
  }

  if (input.dedicatedSla) {
    totalMin += 1800;
    totalMax += 3600;
  }

  // Speed adjustments
  let calculatedWeeks = Math.ceil(maxWeeks * (input.scope === 'enterprise' ? 1.5 : input.scope === 'growth' ? 1.25 : 1.0));
  if (input.speed === 'accelerated') {
    totalMin = Math.round(totalMin * 1.2);
    totalMax = Math.round(totalMax * 1.2);
    calculatedWeeks = Math.max(2, Math.round(calculatedWeeks * 0.7));
  }

  let architecture = 'Modern Jamstack with Headless CMS & Global CDN Edge';
  if (input.selectedServices.includes('cloud-hosting') || input.selectedServices.includes('custom-solutions')) {
    architecture = input.scope === 'enterprise'
      ? 'Multi-region Kubernetes / Cloud Run with Dedicated Zero-Trust VPC'
      : 'Serverless Edge Architecture with Automated CI/CD & Distributed DB';
  }

  return {
    minBudget: totalMin,
    maxBudget: totalMax,
    minWeeks: Math.max(1, calculatedWeeks - 1),
    maxWeeks: calculatedWeeks + 1,
    summary: `${serviceCount} Service${serviceCount > 1 ? 's' : ''} for ${input.scope.toUpperCase()} tier at ${input.speed} pace`,
    recommendedArchitecture: architecture,
  };
}

export function validateInquiryForm(formData: {
  fullName: string;
  email: string;
  selectedServices: ServiceId[];
  message: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = 'Please enter a valid business email address.';
  }

  if (!formData.selectedServices || formData.selectedServices.length === 0) {
    errors.selectedServices = 'Please select at least one service.';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Please provide brief details about your project (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
