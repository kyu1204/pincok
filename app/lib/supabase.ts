import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 데이터베이스 타입 정의
export type Database = {
  public: {
    Tables: {
      groups: {
        Row: {
          id: string
          name: string
          description: string | null
          created_by: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_by: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_by?: string
          created_at?: string
        }
      }
      group_members: {
        Row: {
          id: string
          group_id: string
          user_id: string
          role: string
          joined_at: string
        }
        Insert: {
          id?: string
          group_id: string
          user_id: string
          role?: string
          joined_at?: string
        }
        Update: {
          id?: string
          group_id?: string
          user_id?: string
          role?: string
          joined_at?: string
        }
      }
      pins: {
        Row: {
          id: string
          group_id: string
          user_id: string
          title: string
          content: string | null
          latitude: number
          longitude: number
          created_at: string
        }
        Insert: {
          id?: string
          group_id: string
          user_id: string
          title: string
          content?: string | null
          latitude: number
          longitude: number
          created_at?: string
        }
        Update: {
          id?: string
          group_id?: string
          user_id?: string
          title?: string
          content?: string | null
          latitude?: number
          longitude?: number
          created_at?: string
        }
      }
    }
  }
}