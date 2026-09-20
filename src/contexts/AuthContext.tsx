/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase/client';

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    signUp: (email: string, password: string, returnTo?: string) => Promise<{ error: AuthError | null; confirmationRequired: boolean }>;
    resendSignup: (email: string, returnTo?: string) => Promise<{ error: AuthError | null }>;
    signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
    signOut: () => Promise<{ error: AuthError | null }>;
    resetPassword: (email: string, returnTo?: string) => Promise<{ error: AuthError | null }>;
    updatePassword: (password: string) => Promise<{ error: AuthError | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        let receivedAuthEvent = false;
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!active || receivedAuthEvent) return;
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        }).catch(() => {
            if (active && !receivedAuthEvent) setLoading(false);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!active) return;
            receivedAuthEvent = true;
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => { active = false; subscription.unsubscribe(); };
    }, []);

    const signUp = async (email: string, password: string, returnTo = '/profile') => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: `${window.location.origin}/auth/login?next=${encodeURIComponent(returnTo)}` },
        });
        return { error, confirmationRequired: !data.session };
    };

    const resendSignup = async (email: string, returnTo = '/profile') => {
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email,
            options: { emailRedirectTo: `${window.location.origin}/auth/login?next=${encodeURIComponent(returnTo)}` },
        });
        return { error };
    };

    const signIn = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        return { error };
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        return { error };
    };

    const resetPassword = async (email: string, returnTo = '/profile') => {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/auth/update-password?next=${encodeURIComponent(returnTo)}`,
        });
        return { error };
    };

    const updatePassword = async (password: string) => {
        const { error } = await supabase.auth.updateUser({ password });
        return { error };
    };

    const value = {
        user,
        session,
        loading,
        signUp,
        resendSignup,
        signIn,
        signOut,
        resetPassword,
        updatePassword,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
